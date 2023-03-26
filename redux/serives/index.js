import axios from "axios";

export const testSsrApi = async () => {
  return await axios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/todos`,
  })
    .then((responce) => {
      return responce.data;
    })
    .catch((error) => {
      if (error) {
        return error;
      }
    });
};