const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, "your_jwt_secret");
    req.user = { userId: decoded.userId };

    res.setHeader("X-User-Id", decoded.userId);
    console.log(token);
    console.log(decoded);
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = verifyToken;
