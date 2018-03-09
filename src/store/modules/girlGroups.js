import API from '../../api'
import * as types from '../mutation-types'

const state = {
  isFetching: false,
  tree: {},
}

const getters = {}

const actions = {
  fetchGirlGroups ({ commit }) {
    commit(types.REQUEST_GIRL_GROUPS)
    API.getGirlGroups()
      .then(groups => commit(types.RECEIVE_GIRL_GROUPS, { groups }))
  },
}

const mutations = {
  [types.REQUEST_GIRL_GROUPS] (state) {
    state.isFetching = true
    state.tree = {}
  },
  [types.RECEIVE_GIRL_GROUPS] (state, { groups }) {
    state.isFetching = false
    state.tree = groups
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
