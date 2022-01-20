"use strict" // 자바스크립트의 오류를 최대한 줄인다.
const socket = io(); // socket에 Client Socket IO가 담긴다.

const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")
const displayContainer = document.querySelector(".display-container")

chatInput.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) { // 엔터를 쳤다면
        send()
    }
})

function send() {
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }

    socket.emit("chatting", param)
}

// 이벤트
sendButton.addEventListener("click", send)

socket.on("chatting", (data) => {
    const { name, msg, time } = data;
    const item = new LiModel(name, msg, time); //LiMedel을 인스턴스화
    item.makeLi()
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
})

function LiModel(name, msg, time) {
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi = () => {
        const li = document.createElement("li") // li 생성
        li.classList.add(nickname.value === this.name ? "sent" : "received")
        const dom = `<span class="profile">
        <span class="user">${this.name}</span>
            <img class="image" src="https://placeimg.com/50/50/any" alt="any">
        </span>
        <span class="message">${this.msg}</span>
        <span class="time">${this.time}</span>`;
        li.innerHTML = dom;
        chatList.appendChild(li)
    }
}
