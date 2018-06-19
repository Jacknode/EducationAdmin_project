import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import getters from './getters'
import advertisement from './advertisement'
import car from './car'
import food from './food'
import hotel from './hotel'
import movie from './movie'
import admin from './admin'
import ticket from './ticket'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tagsView,
    permission,
    app,
    user,
    advertisement,
    car,
    food,
    hotel,
    movie,
    admin,
    ticket

  },
  getters
});

export default store
