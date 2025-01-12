const {jwt} = require("jsonwebtoken");
const {JWT_USER_SECRET} = require("../config");

function userMiddleware(req, res, next) {
    const token = req.headers.token

    if (!token) {
        return res.status(403).json({ msg: "Token is required" });
    }

    try {
        const decoded = jwt.verify(token, JWT_USER_SECRET);

        req.userId = decoded.id;
        console.log("user is verified and id is : " +req.userId)
        next();
    } catch (err) {
        console.error("Error verifying token:", err);
        res.status(403).json({
            msg: "Error in user middleware: Invalid token"
        });
    }
}

module.exports = userMiddleware;
