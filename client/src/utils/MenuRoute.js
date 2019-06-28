import axios from "axios";

// Visitor-side menu
export default {
  getMenu: function() {
    return axios.get("/api/menu");
  }
}