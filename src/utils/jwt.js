import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";

export default {
  decode: (token) => {
    return jwtDecode(token);
  },
  encode: (email) => {
    return jwt.sign(
      {
        data: email,
      },
      "secret",
      { expiresIn: "48h" }
    );
  },
};
