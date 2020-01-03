<template>
<section id='render-section'>
  <router-link id='close-button' :to="{ name : 'readArticle', prarams : { id: this.$route.params['id']} }">閉じる</router-link>
  <canvas id='canvas'></canvas>
</section>
</template>

<script>
import * as THREE from 'three'

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
    return { scene, renderer, camera, pointLight, geometry, material, cube }
  },
  mounted () {
    const $canvas = document.getElementById('canvas')
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    })

    this.camera.position.set(0, 0, 2)
    this.pointLight.position.set(10, 50, 130)
    this.scene.add(this.cube)
    this.scene.add(this.pointLight)
    this.animate()
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate)
      this.cube.rotation.x += 0.02
      this.cube.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
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
