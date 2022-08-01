const state = {
  routes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise((resolve) => {
      let accessedRoutes = asyncRoutes || []
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}
