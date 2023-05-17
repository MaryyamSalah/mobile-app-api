import { createStore } from "vuex";
import router from "../router/index";

const state = {};
const getters = {};
const mutations = {
  redirectTo() {
    router.push({ name: "Home" });
  },
};

const actions = {
  redirectTo({ commit }: any) {
    commit("redirectTo");
  },
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});
