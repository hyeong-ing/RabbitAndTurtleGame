<script>
import {ref} from "vue";

const currentSeconds = ref(new Date().getSeconds());

export default {
  name: 'MainView',
  data() {
    return {
      isRabbitRunning: false,
      isRabbitStopping: false,
      isTurtleRunning: false,
    }
  },
  methods: {
    gameStart() {
      if(currentSeconds.value % 2 === 0) {
        this.isRabbitRunning = true;
      } else  {
        this.isRabbitStopping = true;
      }
      this.isTurtleRunning = true;
    },
    reload() {
      window.location.reload();
    }
  }
}

</script>




<template>
  <div class="main-view">

    <button class="game-return" @click="reload"> 다시하기 </button>
    <button class="main-return" @click="$router.push('/home')"> 메인화면 </button>
    <button class="game-start" @click="gameStart"> 시작 </button>

    <div class="rabbit-ground">
      <div class="rabbit-content">
        <img src="../assets/runrabbit.png" alt="달리는토끼" class="running-rabbit"
             :class="{run: isRabbitRunning, stop: isRabbitStopping}"/>
        <div class="rabbit-goalline"/>
        <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green01" />
        <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green02" />
        <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green03" />
      </div>
    </div>

    <div class="turtle-ground">
      <div class="turtle-content">
        <img src="../assets/runturtle.png" alt="달리는 거북이" class="running-turtle" :class="{run: isTurtleRunning}"/>
        <div class="turtle-goalline"/>
        <img src="../assets/sea.png" alt="파도"  class="turtle-sea01"/>
        <img src="../assets/sea.png" alt="파도"  class="turtle-sea02"/>
        <img src="../assets/sea.png" alt="파도"  class="turtle-sea03"/>
      </div>
    </div>

  </div>

</template>




<style scoped>
.main-view{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: white;
}

/* 토끼 */
.rabbit-ground{
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  border-bottom: 3px solid white;
  background: #89f8b4;
}
.rabbit-content{
  position: absolute;
  flex-direction: row;
}

@keyframes rabbit-run {
  0% {
    left: -10%;
  }
  40% {
    left: 50%;
  }
  60% {
    left: 50%;
  }
  100% {
    left: 90%;
  }
}

.running-rabbit{
  position: fixed;
  top: 9%;
  left: -10px;
  width:20%;
}
.running-rabbit.run{
  animation: rabbit-run 5s linear forwards;
}
.running-rabbit.stop {
  animation: rabbit-run 7s ease-in-out forwards;
}

.rabbit-goalline{
  position:fixed;
  left: 92%;
  width: 3%;
  height: 100%;
  border-left: 3px solid white;
  border-right: 3px solid white;
  background: #b3d6f8;
}
.rabbit-green01{
  position: fixed;
  top: 13%;
  width: 40%;
  height: 40%;
  z-index: 10;
}
.rabbit-green02{
  position: fixed;
  top: 13%;
  left: 40%;
  width: 40%;
  height: 40%;
  z-index: 10;
}
.rabbit-green03{
  position: fixed;
  top: 13%;
  left: 80%;
  width: 40%;
  height: 40%;
  z-index: 10;
}

/*  버튼 */
.game-return{
  position: absolute;
  top: 36%;
  left: 13%;
  width: 9%;
  height: 14%;
  transform: rotate(-30deg);
  background: rgba(246, 248, 192, 0.75);
  border:  5px solid white;
  border-radius:  100px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Danjo-bold-Regular;
  text-align: center;
  z-index: 15;
  cursor: pointer;
  transition: width 2s ease, height 2s ease, background 2s ease, transform 2s ease;
}
.game-return:hover{
  width: 10%;
  height: 15%;
  background: rgba(137, 248, 180, 0.85);
  transform: rotate(-20deg);
}
.main-return{
  position: absolute;
  top: 41%;
  left: 46%;
  width: 9%;
  height: 14%;
  background: rgba(244, 161, 250, 0.55);
  border:  5px solid white;
  border-radius:  100px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Danjo-bold-Regular;
  text-align: center;
  z-index: 15;
  cursor: pointer;
  transition: width 2s ease, height 2s ease, background 2s ease;
}
.main-return:hover{
  width: 10%;
  height: 15%;
  background: rgba(248, 137, 141, 0.63);
}
.game-start{
  position: fixed;
  top: 45%;
  left: 80%;
  width: 9%;
  height: 14%;
  transform: rotate(24deg);
  background: rgba(192, 240, 248, 0.75);
  border:  5px solid white;
  border-radius:  100px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Danjo-bold-Regular;
  text-align: center;
  z-index: 15;
  cursor: pointer;
  transition: width 2s ease, height 2s ease, background 2s ease, transform 2s ease;
}
.game-start:hover{
  width: 10%;
  height: 15%;
  background: rgba(244, 234, 110, 0.63);
  transform: rotate(30deg);
}


/* 거북이 */
.turtle-ground{
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
  background: #b3d6f8;
}
.turtle-content{
  position: absolute;
  flex-direction: row;
}
@keyframes turtle-run {
  0% {
    left: -10%;
  }
  100% {
    left: 90%;
  }
}
.running-turtle{
  position: fixed;
  bottom: 3.5%;
  left: -10px;
  width:20%;
}
.running-turtle.run {
  animation: turtle-run 6s linear forwards;
}
.turtle-goalline{
  position:fixed;
  left: 92%;
  width: 3%;
  height: 100%;
  border-left: 3px solid white;
  border-right: 3px solid white;
  background: #89f8b4;
}
.turtle-sea01{
  position: fixed;
  top: 28%;
  width: 100%;
  height: 73%;
  z-index: 10;
}

</style>