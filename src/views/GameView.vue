<script>
import {ref} from "vue";

export default {
  name: 'GameView',
  data() {
    return {
      rabbitRunning: false,
      rabbitStopping: false,
      turtleRunning: false,
    }
  },
  methods: {
    gameStart() {
      const currentSeconds = ref(new Date().getSeconds());
      if(currentSeconds.value % 2 === 0) {
        this.rabbitRunning = true;
      } else  {
        this.rabbitStopping = true;
      }
      this.turtleRunning = true;
    },
    reload() {
      window.location.reload(true);
    }
  }
}

</script>




<template>
  <div class="main-view">

    <div class="rabbit-ground">
      <div class="rabbit-content">
        <img src="../assets/runrabbit.png" alt="달리는토끼" class="running-rabbit"
             :class="{run: rabbitRunning, stop: rabbitStopping}"/>
        <div class="rabbit-goalline"/>
      </div>
    </div>


    <button class="game-return" @click="reload"> 다시하기 </button>
    <button class="main-return" @click="$router.push('/home')"> 메인화면 </button>
    <button class="game-start" @click="gameStart"> 시작 </button>


    <div class="rabbit-green">
      <img src="../assets/tree.png" alt="나무" class="tree" />
      <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green01" />
      <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green02" />
      <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green03" />
    </div>



    <div class="turtle-ground">
      <div class="turtle-content">
        <img src="../assets/runturtle.png" alt="달리는 거북이" class="running-turtle" :class="{run: turtleRunning}"/>
        <div class="turtle-goalline"/>
        <img src="../assets/sea.png" alt="파도"  class="turtle-sea01"/>
        <img src="../assets/sea.png" alt="파도"  class="turtle-sea02"/>
        <img src="../assets/sea.png" alt="파도"  class="turtle-sea03"/>
      </div>
    </div>

  </div>

</template>




<style>
.main-view{
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

}

.game-return{
  position: absolute;
  top: 39%;
  left: 10%;
  width: 9%;
  height: 14%;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  transform: rotate(-30deg);
  background: rgba(246, 248, 192, 0.75);
  border:  5px solid white;
  border-radius:  100px;
  z-index: 15;
  cursor: pointer;
  font-family: Danjo-bold-Regular;
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
  position: absolute;
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


/* 토끼 */
.rabbit-ground{
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background: #89f8b4;
}
.rabbit-content{
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
  position: absolute;
  top: 17%;
  left: -10px;
  width:20%;
  z-index: 10;
}
.running-rabbit.run{
  animation: rabbit-run 5s linear forwards;
}
.running-rabbit.stop {
  animation: rabbit-run 7s linear forwards;
}

.rabbit-goalline{
  position: absolute;
  left: 92%;
  width: 3%;
  height: 100%;
  border-left: 3px solid white;
  border-right: 3px solid white;
  background: #b3d6f8;
  z-index: 5;
}


.rabbit-green{
  position: absolute;
  width: 100%;
  height: 80%;
  top: 10%;
}
.rabbit-green01{
  position: absolute;
  width: 40%;
  height: 56%;
  z-index: 10;
}
.rabbit-green02{
  position: absolute;
  left: 40%;
  width: 40%;
  height: 56%;
  z-index: 10;
}
.rabbit-green03{
  position: absolute;
  left: 80%;
  width: 40%;
  height: 56%;
  z-index: 10;
}
.tree{
  position: absolute;
  left: 35%;
  top: -17%;
  width: 30%;
  height: 70%;
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
  position: absolute;
  bottom: 3.5%;
  left: -10px;
  width:20%;
  z-index: 7;
}
.running-turtle.run {
  animation: turtle-run 6s linear forwards;
}
.turtle-goalline{
  position:absolute;
  left: 92%;
  width: 3%;
  height: 100%;
  border-left: 3px solid white;
  border-right: 3px solid white;
  background: #89f8b4;
  z-index: 5;
}
.turtle-sea01{
  position: absolute;
  top: -25%;
  width: 100%;
  height: 125%;
  z-index: 10;
}

</style>