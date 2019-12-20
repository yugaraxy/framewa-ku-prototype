<template>
<section id='render-section'>
  <router-link id='close-button':to="{ name : 'readArticle', prarams : { id: this.$route.params['id']} }">閉じる</router-link>
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
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000)
    const light = new THREE.DirectionalLight(0xffffff)
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshNormalMaterial()
    const cube = new THREE.Mesh(geometry, material)
    return { scene, renderer, camera, light, geometry, material, cube }
  },
  mounted () {
    const $canvas = document.getElementById('canvas')
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    })

    this.camera.position.set(0, 0, 2)
    this.light.position.set(0, 0, 10)
    this.scene.add(this.cube)
    this.scene.add(this.light)

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
