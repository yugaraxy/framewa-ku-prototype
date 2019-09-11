<template>
  <div>ページ番号: {{ page }}</div>
</template>
<script>
export default{
  data: function () {
    return {
      page: this.$route.params.page_num
    }
  }
}
</script>
