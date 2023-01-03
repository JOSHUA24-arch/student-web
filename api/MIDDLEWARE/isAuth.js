const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.get("Authorization");

  let decodeToken;
  try {
    decodeToken = jwt.verify(
      token,
      "AllstudentAreGivenequalopportunitiestolive"
    );
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }

  if (!decodeToken) {
    const error = new Error("Not authorised");
    error.statusCode = 401;
    throw error;
  }

  req.userId = decodeToken.userId;

  next();
};
