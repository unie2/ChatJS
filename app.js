const express = require("express");
const http = require("http")
const app = express(); // express를 실행한 내용을 app에 담는다.
const path = require("path") // nodeJS의 기본 모듈인 path를 불러온다.
const server = http.createServer(app)
const moment = require("moment")

// socket.io를 받을 수 있도록 서버 세팅
const socketIO = require("socket.io")
const io = socketIO(server) // socket.io에 server를 담는다.

// __dirname : C:\Study\chat
app.use(express.static(path.join(__dirname, "src"))) // express에 'src' static폴더를 만든다.

// 프로세스 환경에 포트가 지정되어 있으면 그 포트를 사용하고 그게 아니라면 5000번 포트를 사용
const PORT = process.env.PORT || 5000; 

// connection이 이루어지면 연결에 대한 정보나 모든 것들을 socket에 담는다.
io.on("connection", (socket) => {
    socket.on("chatting", (data) => {
        const { name, msg } = data;

        io.emit("chatting", {
            name,
            msg,
            time: moment(new Date()).format("h:mm A")
        })
    })
})

// 서버 실행 : app.listen(포트, 명령)
server.listen(PORT, () => console.log(`server is running ${PORT}`));