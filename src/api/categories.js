import axios from "axios";

export default {
  display(data) {
    return axios.get("https://baphy-store.herokuapp.com/categories", data);
  },
};
