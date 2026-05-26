<script>
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
      this.rabbitRunning = false;
      this.rabbitStopping = false;
      this.turtleRunning = false;

      const currentSeconds = new Date().getSeconds();
      if(currentSeconds % 2 === 0) {
        this.rabbitRunning = true;
      } else  {
        this.rabbitStopping = true;
      }
      this.turtleRunning = true;
    },
    reload() {
      this.rabbitRunning = false;
      this.rabbitStopping = false;
      this.turtleRunning = false;
    }
  }
}

</script>




<template>
  <div class="main-view">

    <div class="rabbit-ground">
      <img src="../assets/green1.png" alt="토끼 레인 풀밭" class="track-green rabbit-track-green" />
      <div class="rabbit-content">
        <img src="../assets/rabbit2.png" alt="달리는토끼" class="running-rabbit"
             :class="{run: rabbitRunning, stop: rabbitStopping}"/>
        <img src="../assets/tree.png" alt="나무" class="tree"/>
        <div class="rabbit-goalline"/>
      </div>
    </div>


    <button class="game-return" @click="reload"> 다시하기 </button>
    <button class="main-return" @click="$router.push('/home')"> 메인화면 </button>
    <button class="game-start" @click="gameStart"> 시작 </button>


    <div class="turtle-ground">
      <img src="../assets/green2.png" alt="거북이 레인 풀밭" class="track-green turtle-track-green" />
      <div class="turtle-content">
        <img src="../assets/turtle2.png" alt="달리는 거북이" class="running-turtle" :class="{run: turtleRunning}"/>
        <div class="turtle-goalline"/>
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
  background: #f8d0e5;
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
  background: rgb(244, 192, 220);
  transform: rotate(-20deg);
}
.main-return{
  position: absolute;
  top: 41%;
  left: 46%;
  width: 9%;
  height: 14%;
  background: rgba(245, 186, 250, 0.55);
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
  background: rgba(242, 156, 250, 0.55);
}
.game-start{
  position: absolute;
  top: 45%;
  left: 80%;
  width: 9%;
  height: 14%;
  transform: rotate(24deg);
  background: rgba(130, 170, 114, 0.75);
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
  background: rgba(98, 129, 86, 0.75);
  transform: rotate(30deg);
}

.rabbit-ground{
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background: #f6f6d1;
  overflow: hidden;
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
  top: 26%;
  left: -10px;
  width:20%;
  z-index: 15;
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
  background: #dbebfa;
  z-index: 8;
}

.tree {
  position: absolute;
  width: 27vw;
  height: auto;
  top: -14%;
  left: 25%;
  transform: translateX(50%);
  z-index: 12;
}

.turtle-ground{
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
  background: #eef6fd;
  overflow: hidden;
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
  bottom: -10%;
  left: -10px;
  width:20%;
  z-index: 15;
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
  background: #fbfbb4;
  z-index: 8;
}

.track-green{
  position: absolute;
  width: 100%;
  max-width: none;
  height: auto;
  left: -90px;
  object-fit: fill;
  pointer-events: none;
  z-index: 10;
}

.rabbit-track-green{
  bottom: -5%;
}

.turtle-track-green{
  bottom: 15%;
}

</style>
