# 🐰 토끼와 거북이 경주게임 🐢

### 🌐 배포 서버
#### 이미지를 누르면 서버로 이동합니다.
<a href="https://rabbitandturtle.vercel.app/home">
        <img width="400" height="209" alt="game" src="https://github.com/user-attachments/assets/4d336dee-5a93-4575-96e6-886a83b54138" />
</a>

<br/>
<br/>
<br/>

### ⭐️ 프로젝트 설명
- 토끼와 거북이 경주를 주제로 한 웹 게임입니다.
- 프론트엔드와 Vue의 이해도를 높이기 위해 만들게 된 프로젝트입니다.
- GSAP으로 토끼와 거북이 경주 애니메이션을 구현했습니다.
- canvas-confetti로 결승선에 도착했을 때 폭죽 효과를 구현했습니다.

<br/>

### 🛠️ 기술 스택 & 라이브러리
- 프론트엔드: Vue 3
- 빌드 도구 및 개발 서버: Vite
- 배포: Vercel
- 라이브러리 : GSAP, canvas-confetti 

<br/>

### ⚙️ 로직
- Vue Router를 사용하여 /home과 /game 화면을 분리합니다.
- 현재 초를 2로 나눈 나머지에 따라 승자가 미리 정해집니다.
  →  짝수 초 : 토끼 승리 | 홀수 초 : 거북이 승리
- 결정된 승자에 맞춰 GSAP 애니메이션을 실행합니다.
- 승자를 저장하고 결과 문구와 폭죽을 표시합니다.
