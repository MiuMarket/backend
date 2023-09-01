const { UserModel } = require("../../db/models/user.model");

const logout = async (req, res, next) => {
    const user = req.user;
    await UserModel.findByIdAndUpdate(user._id, { sessionKey: null });
    res.status(204).json();
};

module.exports = {
    logout,
};