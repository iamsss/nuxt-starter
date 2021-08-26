<template>
  <div>
    I am App Component
  </div>
</template>

<script>

export default {
   head: {
    title: 'App Component',
  },
  mounted() {
    this.$store.dispatch('sidebar', 'appcomponents')
  },
}
</script>

