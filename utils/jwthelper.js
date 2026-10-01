const jwt = require("jsonwebtoken");

const SECRET = "users1234";

const createjwt = (userid) => {
    return jwt.sign({ userid: userid },SECRET, {expiresIn: "1d" });
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET);
        return {
            valid: true,
            userid: decoded.userid
        };
    } catch (error) {
        return {
            valid: false,
            error: error
       };
    }
};

module.exports = {
    createjwt,
    verifyToken
};