import Axios from "axios";

// Passport functionality
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
  },
    // Deletes the book with the given id
    deleteMenu: function(id) {
      return Axios.delete("/api/menus/" + id);
    },
};