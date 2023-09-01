const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const authRouter = require('./routes/auth/index');

const { errorHandlingMiddleware } = require("./middlewares/error-handling.middleware");


require("dotenv").config();



const app = express();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.use(errorHandlingMiddleware);

module.exports = app;