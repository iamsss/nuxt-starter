/* eslint-disable no-console */
export const state = () => ({
  authenticated: false,
  roles: [],
  user: null,
  sidebar: ""
})

export const mutations = {
  SET_AUTH(state, authenticated) {
    state.authenticated = authenticated
  },
  SET_ROLE(state, roles) {
    state.roles = roles
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_SIDEBAR(state, sidebar) {
    state.sidebar = sidebar
  }
}

export const getters = {
  authenticated: (state) => state.authenticated,
  roles: (state) => state.roles,
  user: (state) => state.user,
  sidebar: (state) => state.sidebar
}

export const actions = {
  async login({ commit }, credentials) {
    try {
      const user = await this.$axios.$post(
        `${process.env.HOST_URL}/api/v1/login`,
        credentials
      )
      console.log(user)
      if (user && user.token) {
        commit('SET_AUTH', true)
        commit('SET_USER', user)
        commit('SET_ROLE', user.roles)
        this.$cookies.set('jwt', user.token)
        return true
      }
      return false
    } catch (err) {
      console.log(err)
      return false
    }
  },
  logout({ commit }) {
    commit('SET_AUTH', false)
    commit('SET_USER', null)
    commit('SET_ROLE', [])
    this.$cookies.remove('jwt')
  },
  sidebar({ commit }, value) {
    commit('SET_SIDEBAR', value)
  },
  async validateToken({ commit }, credentials) {
    try {
      const user = await this.$axios.$post(
        `${process.env.HOST_URL}/api/v1/validate-token`,
        credentials
      )
      console.log(user)
      if (user && user.token) {
        commit('SET_AUTH', true)
        commit('SET_USER', user)
        commit('SET_ROLE', user.roles)
        this.$cookies.set('jwt', user.token)
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
