import jwt from "../utils/jwt";

export default {
  authenticate() {
    const token = localStorage.getItem("token");
    if (token) {
      const expiryDate = new Date(jwt.decode(token).exp * 1000);
      const today = new Date();
      const isValidToken = expiryDate > today;
      return isValidToken ? true : false;
    }
    return false;
  },
};
