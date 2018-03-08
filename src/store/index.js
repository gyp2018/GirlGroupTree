import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import idolDetail from './modules/idolDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  modules: {
    idolDetail,
  },
  strict: process.env.NODE_ENV !== 'production',
})
