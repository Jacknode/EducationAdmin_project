import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import getters from './getters'

import educationSupplier from './educationSupplier'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tagsView,
    permission,
    app,
    user,

    educationSupplier



  },
  getters
});

export default store
