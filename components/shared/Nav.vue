<template>
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a class="navbar-brand brand-logo mr-5" href="index.html"><img src="images/1k-logo.svg" class="mr-2" alt="logo"/></a>
      <a class="navbar-brand brand-logo-mini" href="index.html"><img src="images/1k-mini.jpeg" alt="logo"/></a>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
        <span class="icon-menu"></span>
      </button>
      <ul class="navbar-nav mr-lg-2">
        
      </ul>
      <ul class="navbar-nav navbar-nav-right">
        <li class="nav-item">
          <a class="btn btn-outline-danger btn-fw btn-sm pd10" @click="logout()">Log out</a>
      </li>
      </ul>
      <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span class="icon-menu"></span>
      </button>
    </div>
  </nav>
</template>


<script>
/* eslint-disable no-console */
export default {
  methods: {
     logout() {
      this.$store.dispatch('logout');
      this.$router.push('/login');
    }
  },
}
</script>
