import axios from "axios";

export default {
  createUser(data) {
    return axios.post("https://baphy-store.herokuapp.com/customers", data);
  },
};
