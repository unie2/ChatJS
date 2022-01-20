## 간단한 채팅 웹 어플리케이션

### 실행 화면

| 초기 화면 |
|:--------|
| ![초기 화면](https://user-images.githubusercontent.com/54324782/150298264-8b959654-928e-4a38-bc28-f491edc1b54b.png)

| 채팅 수행 (프로필 사진은 랜덤) |
|:--------|
| ![채팅 수행](https://user-images.githubusercontent.com/54324782/150298891-38e21a4c-06e7-4905-95ce-3c3586469a1f.png)


### 시스템 주요 기능

- socket.io를 받을 수 있도록 서버 세팅
- 발신자(sent) / 수신자(received) 구분
- 프로필 이미지는 매 순간 랜덤 ([출처](https://placeimg.com/50/50/any))

### 추가

- 필요한 라이브러리 설치  
  > npm install express socket.io moment  
  > npm install -g nodemon

- 서버를 구동해주는 자바스크립트 파일 : app.js
- nodemon : JS파일에 변경이 있을 때마다 자동으로 서버를 재실행시켜준다.
