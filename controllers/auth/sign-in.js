const crypto = require("crypto");
const {
    createHttpException,
    checkHash,
    createJWT,
    createRefresh,
} = require("../../services");
const { addUserSchema } = require("../../schemas/add-user.schema");
const { UserModel } = require("../../db/models/user.model");


const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    const { error } = addUserSchema.validate({ email, password });
    if (error) {
        const invalidField = error.details[0].path[0];
        throw createHttpException(
            400,
            `Missing or not valid field ${invalidField} => ${error.message}`
        );
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
        throw createHttpException(404, "Email or password is wrong");
    }

    const match = await checkHash(password, user.passwordHash);

    if (!match) {
        res.status(401).json({ message: "Email or password is wrong" });
        return;
    }

    const sessionKey = crypto.randomUUID();
    await UserModel.findByIdAndUpdate(user._id, { sessionKey });

    const accessJWT = createJWT({
        userId: String(user._id),
        sessionKey,
    });

    const refreshJWT = createRefresh({
        userId: String(user._id),
        sessionKey,
    });

    res.json({
        accessToken: accessJWT,
        refreshToken: refreshJWT,
        user: {
            id: user._id,
            email: user.email,
            name: user.name,
            surname: user.surname,
            phone: user.phone,
            avatar: user.avatar,
            role: user.role,
        },
    });
};

module.exports = {
    signIn,
};