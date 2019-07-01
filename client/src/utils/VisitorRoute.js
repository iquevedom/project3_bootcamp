import Axios from "axios";

// Visitor apis
export default {
  getInfoById(id) {
    return Axios.get("api/info/" + id);
  },
  getInfoByPhone(phone) {
    return Axios.get("api/info/" + phone);
  },
  postInfoByPhone(phone) {
    return Axios.post("api/info/" + phone);
  },
  postInfoById(id) {
    return Axios.post("/api/info/" + id);
  }
}