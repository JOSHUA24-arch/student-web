const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
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
  let status = decodeToken.status;
  if (status !== "adm") {
    throw new Error("no permission to execute this");
  }

  next();
};
