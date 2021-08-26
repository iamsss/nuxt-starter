<template>
  <div>Types</div>
</template>

<script>
export default {
  head: {
    title: 'Types - App Component',
  },
  mounted() {
    this.$store.dispatch('sidebar', 'appcomponents')
  },
}
</script>

