const REGISTER_IMAGE =
    "https://i.pinimg.com/originals/e8/d7/d0/e8d7d05f392d9c2cf0285ce928fb9f4a.jpg";

const UPLOAD_FILE_LIMIT_IN_BYTE = 3145728;

const ALLOWED_FORMATS = ["jpg", "png", "svg", "webp"];

const PHONE_REGEXP = /^\+380\d{9}$|^\+380\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/;

const EMAIL_REGEXP = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,16})$/;


module.exports = {
    REGISTER_IMAGE,
    UPLOAD_FILE_LIMIT_IN_BYTE,
    ALLOWED_FORMATS,
    PHONE_REGEXP,
    EMAIL_REGEXP,
    PASSWORD_REGEXP

};