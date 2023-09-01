const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
    {
        passwordHash: {
            type: String,
            required: [true, "Set password for user"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            trim: true,
            index: true,
        },
        name: {
            type: String,
            default: "Name",
        },

        phone: {
            type: String,
            unique: true,
            default: "+380000000000",
            required: true,
        },
        sessionKey: {
            type: String,
            default: null,
            trim: true,
        },
        refreshToken: {
            type: String,
        },
        accessToken: {
            type: String,
        },
        address: {
            city: String,
            street: String,
            building: String,
            apartment: String,
        },
        avatar: {
            type: String,
        },
        favorite: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
            },
        ],
        role: {
            type: String,
            default: "USER",
            enum: ["USER", "MANAGER", "ADMIN"],
        },



    },
    {
        versionKey: false,
        timestamps: false,
    }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel,
};