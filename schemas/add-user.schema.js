const Joi = require("joi");
const { EMAIL_REGEXP } = require("../utils");

const addUserSchema = Joi.object({
    email: Joi.string().regex(EMAIL_REGEXP).required(),
    password: Joi.string()
        .min(6)
        .max(16)
        .required()
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,16})")),
});

const refreshSchema = Joi.object({
    refreshToken: Joi.string().required(),
});

module.exports = {
    addUserSchema,
    refreshSchema,
};