const express = require('express')  //require는 모듈안에 express를 찾아옴
const  app = express();

const PORT = 4000;

function handleLisening() {
    console.log(`Listening on: http://localhost:${PORT}`)
}

function handleHome(req, res) {
    console.log(req);
    res.send('hello from home')
}

app.get("/", handleHome)   //누군가 main url로 접근할 시 handleHome 함수 호출

app.listen(PORT, handleLisening);  //포트번호


