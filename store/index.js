export const state = () => ({
  authenticated: false,
  roles: [],
  user: null
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
  }
}

export const getters = {
  authenticated: (state) => state.authenticated,
  roles: (state) => state.roles,
  user: (state) => state.user
}

export const actions = {
  async login({ commit, app }, credentials) {
    try {
      const user = await this.$axios.$post(
        `${process.env.HOST_URL}/api/v1/login`,
        credentials
      ).data

      if (user && user.token) {
        commit('SET_AUTH', true)
        commit('SET_USER', user)
        commit('SERT_ROLE', user.roles)
        // app.$cookies.set('jwt', user.token, {
        //   httpOnly: true,
        //   secure: true,
        //   maxAge: 60 * 60 * 24 * 7
        // })
        return true
      }
      return false
    } catch (err) {
      return false
    }
  }
}
