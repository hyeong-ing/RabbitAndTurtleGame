<script setup lang="ts">

</script>




<template>
  <div class="home-view">
    <img src="@/assets/winnerturtle.png" alt="이긴거북이" class="winner-turtle"/>
    <img src="@/assets/winnerrabbit.png" alt="이긴토끼" class="winner-rabbit"/>

    <div class="rabbit-container">
      <img src="../assets/speech1.png" alt="말풍선1" class="speech-bubble1"/>
      <p class="rabbit-text"> 제가 더 잘해욥! </p>
    </div>

    <div class="turtle-container">
      <img src="../assets/speech2.png" alt="말풍선2" class="speech-bubble2"/>
      <p class="turtle-text"> 나를 뽑아줘잉~ </p>
    </div>

    <div class="banner">
      <div class="banner1">
        <p class="banner-text1"> 토끼와 거북이 </p>
      </div>

      <div class="banner2">
        <img src="../assets/red.png" alt="리본" class="ribbon1"/>
        <p class="banner-text2"> 토끼와 거북이 국제대회에 오신걸 환영합니다.</p>
        <p class="banner-text3"> 이번 대회에서 토끼와 거북이 중 누가 이길지</p>
        <p class="banner-text4"> 친구들과 내기해보세요.</p>
      </div>
    </div>

    <div class="btn-container">
      <button class="main-button" @click="$router.push({ path:'/game' })"> 보러가기 </button>
    </div>

  </div>

</template>




<style >
.home-view {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #b3d6f8;
}
.winner-rabbit {
  position: absolute;
  width: 28%;
  height: 60%;
  top: -5%;
  left: -2%;
  z-index: 10;
  transform: rotate(20deg);
  transition: transform 0.75s ease;
}
.winner-rabbit:hover {
  transform: rotate(10deg);
}
.winner-turtle {
  position: absolute;
  width: 40%;
  height: 80%;
  top: 25%;
  left: 68%;
  z-index: 10;
  transform: rotate(10deg);
  transition: transform 0.75s ease-in-out;
}
.winner-turtle:hover {
  transform: rotate(20deg);
}


/* 토끼 말풍선 */
.rabbit-container {
  position: absolute;
  width: 30vw;
  height: 25vh;
  left:18%;
  top: 1%;
  z-index: 10;
}

.speech-bubble1 {
  width: 100%;
  height: 100%;
  transform: rotate(-5deg);
}
.rabbit-text {
  position: absolute;
  font-size: 2.1em;
  width: 60%;
  height: 30%;
  top: 35%;
  left: 23%;
  color: black;
  text-align: center;
  transform: rotate(-5deg);
}


.turtle-container {
  position: absolute;
  width: 30vw;
  height: 40vh;
  left:70%;
  top: 10%;
  z-index: 10;
}
.speech-bubble2 {
  width: 100%;
  height: 100%;
  z-index: 10;
  transform: rotate(25deg);
}
.turtle-text {
  position: absolute;
  font-size: 2.1em;
  width: 60%;
  height: 30%;
  top: 36%;
  left: 20%;
  color: black;
  text-align: center;
  transform: rotate(30deg);
}



/* 배너요소 */
.banner {
  position: absolute;
  width: 70%;
  height: 60%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #89f8b4;
  border-radius: 30px;
  border: white solid 10px;
}
/* 토끼와 거북이 */
.banner1 {
  position: absolute;
  width: 100%;
  height: 25%;
  top: 17%;
  left: 50%;
  z-index: 20;
  text-align: center;
  transform: translate(-50%, -50%);
  font-size: 6.4rem;
}
.banner-text1 {
  font-size: 6.4rem;
  color: #cfa661;
  font-family: BagelFatOne-Regular;
}


.banner2 {
  position: absolute;
  width: 100%;
  height: 60%;
  top: 60%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  flex-direction: column;
}

/* 리본 */
.ribbon1 {
  position: absolute;
  width: 60%;
  top: 40%;
  transform: translate(-50%, -50%);
  transition: width 0.75s ease-in-out;
}
.ribbon1:hover {
  width:70%;
}

.banner-text2 {
  position: absolute;
  font-size: 1.7rem;
  width: 100%;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #b1791c;
  font-family: Danjo-bold-Regular;
}
.banner-text3 {
  position: absolute;
  font-size: 1.7rem;
  top: 75%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align:  center;
  color: #b1791c;
  font-family: Danjo-bold-Regular;
}
.banner-text4 {
  position: absolute;
  font-size: 1.7rem;
  width: 100%;
  top: 88%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align:  center;
  color: #b1791c;
  font-family: Danjo-bold-Regular;
}

.btn-container{
  position: absolute;
  width: 100%;
  height: 20%;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.main-button {
  width: 20%;
  height: 38%;
  font-size: 1.7rem;
  font-weight:  bold;
  font-family: Danjo-bold-Regular;
  border:  white solid 4px;
  border-radius: 40px;
  color: #b1791c;
  background: #89f8b4;
  cursor: pointer;
  transition: background 0.4s ease, border 0.4s ease, color 0.4s ease;
}
.main-button:hover {
  background: #b1791c;
  color: #89f8b4;
  border:  white solid 7px;
}
</style>