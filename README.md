# 🐰 토끼와 거북이 경주게임 🐢

<br/>

<p align="center"> 

 <br/>
 프론트엔드의 이해를 높이기 위해 Vue로 간단한 게임을 만들어봤습니다. <br/>
 Java로는 주로 서버 로직이나 데이터 처리 흐름을 구현하는데,<br/>
 프론트엔드에서는 요소를 직접 움직이며 시각적 자극을 더 다양하게 줄 수 있다는 점이 흥미로웠습니다. <br/>
 그래서 실제 코드는 어떻게 작성하는지 너무나도 궁금해서 바로 프로젝트를 시작하게 되었습니다. <br/>
 <br/><br/>

  <img width="700" height="360" alt="OG" src="https://github.com/user-attachments/assets/bac9c2a7-3252-4f19-a771-aa2016b59933" />

</p>

<br/>
<br/>
<br/>

### 🌐 서버
#### 이미지를 누르면 서버로 이동합니다.
<a href="https://rabbitandturtle.vercel.app/home">
        <img width="500" height="259" alt="game" src="https://github.com/user-attachments/assets/4d336dee-5a93-4575-96e6-886a83b54138" />
</a>

<br/>
<br/>
<br/>


### 🔶 프로젝트 관련 링크

+ [Blog (프로젝트 기록)](https://post-this.tistory.com/category/%F0%9F%92%BB%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%F0%9F%90%B0%ED%86%A0%EB%81%BC%EC%99%80%20%EA%B1%B0%EB%B6%81%EC%9D%B4%20%EA%B2%BD%EC%A3%BC%EA%B2%8C%EC%9E%84%F0%9F%90%A2)
  
+ Youtube (동작화면)

+ [Figma (다이어그램)]()


<br/><br/>


### 🔶 프로젝트 설명

+ 
+ GSAP으로 토끼와 거북이 경주 애니메이션을 구현했습니다.
+ canvas-confetti로 결승선에 도착했을 때 폭죽 효과를 구현했습니다.


<br/><br/>


### 🔶 기술 스택 & 라이브러리
- 프론트엔드: Vue 3
- 빌드 도구 및 개발 서버: Vite
- 배포: Vercel
- 라이브러리 : GSAP, canvas-confetti 


<br/><br/>


### 🔶 프로젝트 목표



<br/><br/>

### ⚙️ 로직
- Vue Router를 사용하여 /home과 /game 화면을 분리합니다.
- 현재 초를 2로 나눈 나머지에 따라 승자가 미리 정해집니다.
  →  짝수 초 : 토끼 승리 | 홀수 초 : 거북이 승리
- 결정된 승자에 맞춰 GSAP 애니메이션을 실행합니다.
- 승자를 저장하고 결과 문구와 폭죽을 표시합니다.
