//const express = require('express')  //require는 모듈안에 express를 찾아옴
import express from "express";
import morgan from "morgan";  //logger
import helmet from "helmet"; // 보안을 위한
import cookieParser from "cookie-parser";
import bodyParser, { urlencoded } from "body-parser";

const  app = express();

const PORT = 4000;
// ex)
// function handleProfile(req, res) {
//     res.send('your are on my profile')

const handleLisening = () =>  console.log(`Listening on: http://localhost:${PORT}`);  //arrow function

const  handleHome = (req, res) =>  res.send('hello from my cccc ');

const  handleProfile = (req, res) =>   res.send('your are on my profile');  

// const betweenHome = (req, res, next) => {    //middleware
//     console.log("Between") ;
//     next();   
// }

// const middleware = (req, res, next) => {    //middleware는 중간에 연결을 끊을수 있음
//     res.send('not happening')
// } 

// app.use(betweenHome);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(helmet());
app.use(morgan("dev"));



app.get("/", middleware,  handleHome) ;  //누군가 main url로 접근할 시 handleHome 함수 호출

app.get("/profile", handleProfile);
 
app.listen(PORT, handleLisening);  //포트번호


