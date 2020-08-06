import jwtDecode from "jwt-decode";
import jwt from "jsonwebtoken";

export default {
  decode: (token) => {
    return jwtDecode(token);
  },
  encode: (email, token) => {
    return jwt.sign(
      {
        data: email,
      },
      token,
      { expiresIn: "48h" }
    );
  },
};
