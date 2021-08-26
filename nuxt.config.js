export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'niyoos_workstation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'vendors/js/vendor.bundle.base.js'
      },
      {
        src: 'js/off-canvas.js'
      },
      {
        src: 'js/hoverable-collapse.js'
      },
      {
        src: 'js/template.js'
      },
      {
        src: 'js/main/main.js'
      }    
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'static/vendors/feather/feather.css',
    'static/vendors/ti-icons/css/themify-icons.css',
    'static/vendors/css/vendor.bundle.base.css',
    'static/css/vertical-layout-light/style.css',
    'static/css/main/main.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    'cookie-universal-nuxt',
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Middleware configuration
  middleware: ['auth']
}
