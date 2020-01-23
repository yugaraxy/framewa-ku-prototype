<template>
<section id='render-section'>
  <router-link id='close-button' :to="{ name : 'readArticle', prarams : { id: this.$route.params['id']} }">閉じる</router-link>
  <canvas id='canvas'></canvas>
</section>
</template>

<script>
import * as THREE from 'three'
import {WEBGL} from 'three/examples/jsm/WebGL.js'
import {VRButton} from 'three/examples/jsm/webxr/VRButton.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'

export default {
  name: 'render-3d',
  data: function () {
    const scene = new THREE.Scene()
    const renderer = null

    // Set some camera attributes.
    const viewAngle = 75
    const windowHeight = window.parent.screen.height
    const windowWidth = window.parent.screen.width
    const aspect = windowWidth / windowHeight
    const near = 0.1
    const far = 10000
    const camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far)

    const pointLight = new THREE.PointLight(0xFFFFFF)

    const sphereRadius = 1
    const sphereSegments = 1
    const sphereRings = 1
    const geometry = new THREE.BoxGeometry(sphereRadius, sphereSegments, sphereRings)
    const material = new THREE.MeshLambertMaterial({ color: 0xCC0000 })
    const cube = new THREE.Mesh(geometry, material)

    const materialForLine = new THREE.LineBasicMaterial({color: 0x0000ff})
    const geometryForLine = new THREE.Geometry()
    geometryForLine.vertices.push(new THREE.Vector3(-10, 0, 0))
    geometryForLine.vertices.push(new THREE.Vector3(0, 10, 0))
    geometryForLine.vertices.push(new THREE.Vector3(10, 0, 0))
    const line = new THREE.Line(geometryForLine, materialForLine)

    return { scene, renderer, camera, pointLight, geometry, material, cube, line }
  },
  mounted () {
    const $canvas = document.getElementById('canvas')
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    })
    this.renderer.setPixelRatio(3)

    this.camera.position.set(0, 0, 10)
    this.pointLight.position.set(10, 50, 130)
    this.scene.add(this.cube)
    this.scene.add(this.line)
    this.scene.add(this.pointLight)

    this.animate()
    this.test()
    this.drawLines()

    document.body.appendChild(VRButton.createButton(this.renderer))
    if (this.renderer.xr) {
      this.renderer.xr.enabled = true
      this.renderer.setAnimationLoop(function () {
        this.renderer.render(this.scene, this.camera)
      })
    }
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate)
      this.cube.rotation.x += 0.02
      this.cube.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    },
    test () {
      if (WEBGL.isWebGL2Available() === false) {
        console.log('error: ' + WEBGL.getWebGL2ErrorMessage())
      } else {
        console.log('webgl2 is available')
      }
    },
    drawLines () {
      const MAX_POINTS = 500
      const geometry = new THREE.BufferGeometry()
      var positions = new Float32Array(MAX_POINTS * 3)

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

      const drawCount = 2
      geometry.setDrawRange(0, drawCount)
      const material = new THREE.LineBasicMaterial({color: 0xff0000})
      const line = new THREE.Line(geometry, material)
      this.scene.add(line)

      var changingPositions = line.geometry.attributes.position.array
      var x, y, z, index
      x = y = z = index = 0

      line.geometry.setDrawRange(0, 10)
      line.geometry.attributes.position.needsUpdate = true

      function updatePoints () {
        for (var i = 0, l = MAX_POINTS; i < l; i++) {
          changingPositions[index++] = x
          changingPositions[index++] = y
          changingPositions[index++] = z

          x += (Math.random() - 0.5) * 10
          y += (Math.random() - 0.5) * 10
          z += (Math.random() - 0.5) * 10
        }
        line.geometry.computeBoundingSphere()
      }
      updatePoints()
    },
    drawTexts () {
      const loader = new THREE.FontLoader()
      loader.load('fonts/helvetiker_regular.typeface.json', function (font) {
        const geometry = new THREE.TextGeometry('Hello three.js!', {
          font: font,
          size: 80,
          height: 5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 10,
          bevelSize: 8,
          bevelOffset: 0,
          bevelSegments: 5
        })
      })
    }
  }
}
</script>

<style>
#canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

#close-button {
  position: fixed;
  top: 5vh;
  left: 5vh;
  color: white;
  z-index: 2;
}
</style>
