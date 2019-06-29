import Axios from "axios";

// Order apis
export default {
  getOrders(id) {
    return Axios.get("api/orders/" + id);
  },
  postOrders(id) {
    return Axios.post("api/orders/" + id);
  },
  getAdminOrders() {
    return Axios.get("/api/admin/orders");
  },
  postAdminOrders(id) {
      return Axios.post("/api/admin/orders/" + id);
  },
  deleteAdminOrders(id) {
    return Axios.delete("/api/admin/orders/" + id);
  }
}