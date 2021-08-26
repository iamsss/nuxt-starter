<template>
  <nav id="sidebar" class="sidebar sidebar-offcanvas">
    <ul class="nav">
      <li class="nav-item" :class="{ active: sidebar == 'dashboard' }">
        <NuxtLink to="/" class="nav-link" href="/">
          <i class="icon-grid menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </NuxtLink>
      </li>
      <li class="nav-item" :class="{ active: sidebar == 'appcomponents' }">
            <a class="nav-link" data-toggle="collapse" href="#app-components-box" aria-expanded="false" aria-controls="app-components-box">
              <i class="ti-mobile menu-icon"></i>
              <span class="menu-title">App Components </span>
              <i class="menu-arrow"></i>
            </a>
            <div id="app-components-box" class="collapse">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <NuxtLink to="/appcomponents/types" class="nav-link">Types</NuxtLink></li>
                <li class="nav-item"> <NuxtLink to="/appcomponents/actions" class="nav-link">Actions</NuxtLink></li>
                <li class="nav-item"> <NuxtLink to="/appcomponents/properties" class="nav-link">Properties</NuxtLink></li>
              </ul>
            </div>
          </li>
      <li v-if="hasRole('admin')" class="nav-item" :class="{ active: sidebar == 'stock-validation' }">
        <a class="nav-link" href="/stock-validation">
          <i class="icon-paper menu-icon"></i>
          <span class="menu-title">Stock Validation</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['sidebar', 'roles']),
  methods: {
    hasRole(role) {
      return this.roles.includes(role);
    }
  }
}
</script>
