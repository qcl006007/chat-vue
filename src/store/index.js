import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist"
import actions from "./action"
import mutations from "./mutation"

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: null,
    user: null,
    reconnect: false,
    activeRoom: null,
    rooms: [],
    users: [],
    messages: [],
    userTyping: null
  },
  getters: {
    hasError: state => state.error ? true : false
  },
  mutations: mutations,
  actions: actions,
  modules: {},
  plugins: [vuexLocal.plugin]
});

