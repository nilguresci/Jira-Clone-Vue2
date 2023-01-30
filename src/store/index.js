import Vue from "vue";
import Vuex from "vuex";
import { taskService } from "@/services/TaskService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    getTasks(state, payload) {
      console.log(payload);
      state.tasks = payload.data;
    },
  },
  actions: {
    setTasks({ commit }) {
      // let loadingData = [
      //   { name: "Loading", price: "Loading" },
      //   { name: "Loading", price: "Loading" },
      //   { name: "Loading", price: "Loading" },
      //   { name: "Loading", price: "Loading" },
      // ];
      // commit("getProducts", { data: loadingData });
      taskService
        .getTasks()
        .then((res) => {
          commit("getTasks", { data: res });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
