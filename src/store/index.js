import Vue from "vue";
import Vuex from "vuex";
import { taskService } from "@/services/TaskService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    sections: [
      {
        id: "",
        sectionName: "",
        createdAt: "",
        tasks: [],
        newSectionData: "",
      },
    ],
  },
  getters: {},
  mutations: {
    getTasks(state, payload) {
      state.tasks = payload.data;
    },
    getSections(state, payload) {
      state.sections = payload.data;
    },
    getNewSectionInfo(state, payload) {
      state.newSectionData = payload.data;
    },
  },
  actions: {
    setTasks({ commit }) {
      taskService
        .getTasks()
        .then((res) => {
          commit("getTasks", { data: res });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setSections({ commit }) {
      taskService
        .getSections()
        .then((res) => {
          commit("getSections", { data: res });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setNewSection({ dispatch }) {
      var d = Date(Date.now());
      let today = d.toString();

      const newSectionData = {
        sectionName: "new section",
        id: "123",
        createdAt: today,
      };
      taskService
        .addNewSection(newSectionData)
        .then(() => {
          dispatch("setSections");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setNewTask({ dispatch }, taskData) {
      const newTaskData = taskData.taskData;
      taskService
        .addTask(newTaskData)
        .then(() => {
          dispatch("setTasks");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setUpdateSectionName({ dispatch }, data) {
      let sendData = data.updateData;
      taskService
        .updateSectionName(sendData, sendData.id)
        .then(() => {
          dispatch("setSections");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setUpdateSectionIdTask({ dispatch }, data) {
      let sendData = data.updateTask;
      taskService
        .updateSectionIdTask(sendData, sendData.id)
        .then(() => {
          dispatch("setTasks"); //task in section id'si güncellenince tasklerde güncelleniyor
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {},
});
