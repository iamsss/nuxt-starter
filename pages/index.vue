<template>
  <div>
    <HomeDashboard />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Dashboard',
  },
  mounted() {
    this.$store.dispatch('sidebar', 'dashboard')
  },
}
</script>
