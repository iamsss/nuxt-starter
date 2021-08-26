
<template>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="images/1k-logo.svg" alt="logo">
              </div>
              <h4>Hello! let's get started</h4>
              <h6 class="font-weight-light">Sign in to continue.</h6>
              <form class="pt-3" @submit.prevent="login()">
                <div class="form-group">
                  <input id="emailInput" v-model="email" type="email" class="form-control form-control-lg" name="email"  required placeholder="Username">
                </div>
                <div class="form-group">
                  <input id="exampleInputPassword1" v-model="password" type="password" class="form-control form-control-lg" name="password"  required placeholder="Password">
                </div>
                <div class="mt-3">
                  <button type="submit" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
 data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      console.log("i run on");
      const isSuccess = await this.$store.dispatch('login',this.getData());
      if(isSuccess){ 
        this.$router.push('/');
      }
      console.log(isSuccess);
    },
    getData(){
      return {
        email: this.email,
        password: this.password
      }
    }
  },
}
</script>
