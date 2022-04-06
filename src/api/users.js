import axios from "axios";

export default {
  login(user) {
    return axios.get("https://baphy-store.herokuapp.com/users", user);
  },
};
