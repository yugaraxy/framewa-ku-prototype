<template>
  <div>
    <router-view name="sub" />
    <p>私の名前は{{ name }}です。</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: 'Yu'
    }
  },
  methods: {
    onclick: function () {
      this.$router.push('top')
    }
  }
}
</script>
