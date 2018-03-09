import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import girlGroups from './modules/girlGroups'
import idolDetail from './modules/idolDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  // actions,
  modules: {
    girlGroups,
    idolDetail,
  },
  strict: process.env.NODE_ENV !== 'production',
})
