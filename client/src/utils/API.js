import Axios from "axios";

export default {
  signIn(email, password) {
    return Axios.post("/v1/user/signin", { email, password });
  },
  signUp(email, password) {
    return Axios.post("/v1/user/signup", { email, password });
  },
  getInfo(token) {
    return Axios.get("/v1/user/getInfo", { headers: { Authorization: token } });
  },
  // Gets all books
  
  getMenus: function() {
    return Axios.get("/api/menu-items");
  }
};
