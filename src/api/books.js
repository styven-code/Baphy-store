import axios from "axios";

export default {
  display(data) {
    return axios.get("https://baphy-store.herokuapp.com/books", data);
  },
  create(data) {
    return axios.post("https://baphy-store.herokuapp.com/books", data);
  },
};
