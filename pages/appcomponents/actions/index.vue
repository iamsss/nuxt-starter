<template>
  <div>
    Actions
  </div>
</template>

<script>

export default {
   head: {
    title: 'Actions - App Component',
  },
  mounted() {
    this.$store.dispatch('sidebar', 'appcomponents')
  },
}
</script>

