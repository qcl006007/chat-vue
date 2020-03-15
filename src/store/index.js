import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist"

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: null,
    user: [],
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
  mutations: {},
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin]
});
