<script>

export default {
  name: 'MainView',
}

</script>




<template>
  <div class="main-view">

    <button class="game-return" @click="$router.push('/game')"> 다시하기 </button>
    <button class="game-start" @click="game-start"> 시작 </button>

    <div class="rabbit-ground">
      <div class="rabbit-content">
        <img src="../assets/runrabbit.png" alt="달리는토끼" class="running-rabbit"/>
        <div class="rabbit-goalline"/>
        <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green01" />
        <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green02" />
        <img src="../assets/biggreen.png" alt="풀밭" class="rabbit-green03" />
      </div>
    </div>

    <div class="turtle-ground">
      <div class="turtle-content">
        <img src="../assets/runturtle.png" alt="달리는 거북이" class="running-turtle"/>
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
  position: relative;
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
.running-rabbit{
  position: fixed;
  top: 9%;
  left: -10px;
  width:20%;
  cursor: pointer;
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
.game-return{
  position: fixed;
  top: 40%;
  left: 13%;
  width: 9%;
  height: 7%;
  transform: rotate(-30deg);
  background: rgba(246, 248, 192, 0.75);
  border:  3px solid white;
  border-radius:  20px;
  font-size: 1.2rem;
  z-index: 15;
  cursor: pointer;
}
.game-return:hover{
  width: 10%;
  height: 8%;
  background: rgba(137, 248, 180, 0.85);
  transform: rotate(-20deg);
  transition: width 2s ease, height 2s ease, background 2s ease, transform 2s ease;
}

/* 거북이 */
.turtle-ground{
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
  background: #b3d6f8;
}
.game-start{
  position: fixed;
  top: 47%;
  left: 73%;
  width: 9%;
  height: 7%;
  transform: rotate(24deg);
  background: rgba(192, 240, 248, 0.75);
  border:  3px solid white;
  border-radius:  20px;
  font-size: 1.2rem;
  z-index: 15;
  cursor: pointer;
}
.game-start:hover{
  width: 10%;
  height: 8%;
  background: rgba(244, 234, 110, 0.71);
  transform: rotate(30deg);
  transition: width 2s ease, height 2s ease, background 2s ease, transform 2s ease;
}
.turtle-content{
  position: absolute;
  flex-direction: row;
}
.running-turtle{
  position: fixed;
  bottom: 3.5%;
  left: -10px;
  width:20%;
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