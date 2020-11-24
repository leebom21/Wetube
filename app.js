//const express = require('express')  //require는 모듈안에 express를 찾아옴
import express from "express";
import morgan from "morgan"; //logger
import helmet from "helmet"; // 보안을 위한
import cookieParser from "cookie-parser";
import bodyParser, { urlencoded } from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter); //join, login, home, search 등을 다룸
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;