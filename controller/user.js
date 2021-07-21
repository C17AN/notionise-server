import User from "../model/user.js";

const createUser = async (req, res) => {
  try {
    const user = new User({ username: req.body.username });
  } catch (error) {}
};
