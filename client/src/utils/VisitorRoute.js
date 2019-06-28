import Axios from "axios";

// Visitor-side menu
export default {
  getMenu() {
    return Axios.get("/api/menu");
  }
}