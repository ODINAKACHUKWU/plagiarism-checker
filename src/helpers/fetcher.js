import jwtDecode from "jwt-decode";

export default {
  getUserId() {
    const token = localStorage.getItem("token");
    const userId = jwtDecode(token).data;
    return userId;
  },
};
