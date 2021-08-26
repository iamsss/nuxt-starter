<template>
  <div>
    Add Properties
  </div>
</template>

<script>

export default {
   head: {
    title: 'Properties - App Component',
  },
  mounted() {
    this.$store.dispatch('sidebar', 'appcomponents')
  },
}
</script>

