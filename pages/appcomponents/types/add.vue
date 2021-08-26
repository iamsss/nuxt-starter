<template>
  <div>
    Add Types
  </div>
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

