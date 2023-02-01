import axios from "axios";

const apiUrl = "https://63d7ccf7afbba6b7c944a9a6.mockapi.io";

const getSections = async () => {
  const result = await axios.get(apiUrl + "/sections");

  return result.data;
};

const getTasks = async () => {
  const result = await axios.get(apiUrl + "/tasks");

  return result.data;
};

const addNewSection = async (sectionData) => {
  const result = await axios
    .post(apiUrl + "/sections", sectionData)
    .then((res) => {
      return res;
    });
  return result;
};

const addTask = async (taskData) => {
  const result = await axios.post(apiUrl + "/tasks", taskData).then((res) => {
    return res;
  });
  return result;
};

const updateSectionName = async (updateData, id) => {
  const result = await axios
    .put(apiUrl + "/sections/" + id, updateData)
    .then((res) => {
      return res;
    });
  return result;
};

const updateSectionIdTask = async (task, taskId) => {
  const result = await axios
    .put(apiUrl + "/tasks/" + taskId, task)
    .then((res) => {
      console.log("updated task", res);
    });
  return result;
};

export const taskService = {
  getTasks,
  getSections,
  addNewSection,
  addTask,
  updateSectionName,
  updateSectionIdTask,
};

export default taskService;
