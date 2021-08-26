<template>
   <div>
    <SharedNav />
    <div class="container-fluid page-body-wrapper">
      <SharedSidebar />
      <div class="main-panel">
    <Nuxt />
        <SharedFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {
     middleware: ['auth']
}
</script>
