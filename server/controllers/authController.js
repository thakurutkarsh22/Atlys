// DB req

const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secretKey = "atlysBackendProject";

async function createUser(req, res) {
  try {
    const { userName, password, email } = req.body;

    const usercollectionObj = new User({ username: userName, password, email }); //
    const response = await usercollectionObj.save(); // Db db please save the

    const authData = {
      user: { id: usercollectionObj._id },
    };

    // while you are creting a user we need singIn also...
    const authToken = jwt.sign(authData, secretKey);

    res.status(201).json({
      success: true,
      authToken,
      user: response,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

async function loginUser(req, res) {
  try {
    const { userName, password } = req.body;

    const usrFound = await User.findAndValidate(userName, password);

    if (usrFound) {
      const authData = {
        user: { id: usrFound._id },
      };
      const authToken = jwt.sign(authData, secretKey);
      res.status(200).json({
        success: true,
        authToken,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = {
  createUser,
  loginUser,
};
