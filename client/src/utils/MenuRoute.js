import Axios from "axios";

// Menu apis
export default {
  getMenu() {
    return Axios.get("api/menu");
  },
  getAdminMenu() {
    return Axios.get("/api/admin/menu");
  },
  postAdminMenu() {
      return Axios.post("/api/admin/menu");
  },
  deleteAdminMenu(id) {
    return Axios.delete("/api/admin/menu/" + id);
  }
}