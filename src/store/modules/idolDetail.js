import API from '../../api'
import * as types from '../mutation-types'

const state = {
  list: {},
  detail: {},
}

const getters = {}

const actions = {
  fetchIdolDetail ({ commit }, idolKey) {
    commit(types.REQUEST_IDOL_DETAIL)
    API.getIdolDetail({ idolKey })
      .then(idol => commit(types.RECEIVE_IDOL_DETAIL, { idolKey, idol }))
  },
}

const mutations = {
  [types.REQUEST_IDOL_DETAIL] (state) {
    state.list = {}
    state.detail = {}
  },
  [types.RECEIVE_IDOL_DETAIL] (state, { idolKey, idol }) {
    state.list[idolKey] = idol
    state.detail = idol
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
