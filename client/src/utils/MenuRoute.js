import Axios from "axios";

// Menu apis
export default {
  getMenu() {
    return Axios.get("/api/menu");
  },
  postMenu() {
      return Axios.post("/api/admin/menu");
  }
}