import axios from "axios";

const apiUrl = "https://63d7ccf7afbba6b7c944a9a6.mockapi.io/tasks";

// async function getTasks() {
//   return await axios
//     .get(`${apiUrl}`)
//     .then((res) => {
//       console.log("tasks", res.data.data);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

const getTasks = async () => {
  const result = await axios.get(apiUrl);

  return result.data;
};

export const taskService = {
  getTasks,
};

export default taskService;
