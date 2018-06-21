import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import getters from './getters'
import admin from './admin'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tagsView,
    permission,
    app,
    user,
    admin



  },
  getters
});

export default store
