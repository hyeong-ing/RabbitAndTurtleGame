<template>
  <div class="home-view">
    <div class="line line-pink-top"></div>
    <div class="line line-pink-bottom"></div>
    <div class="line line-green"></div>

    <img src="@/assets/title.png" alt="토끼와 거북이" class="home-title" />
    <img src="@/assets/explain.png" alt="토끼와 거북이 국제 대회 설명" class="home-explain" />
    <img src="@/assets/turtle1.png" alt="왕관을 쓴 거북이" class="home-turtle" />
    <img src="@/assets/rabbit1.png" alt="왕관을 쓴 토끼" class="home-rabbit" />

    <button class="enter-button" type="button" @click="$router.push('/game')">입장하기</button>
  </div>
</template>



<style scoped>
.home-view {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #eee8eb;
  --line-width: 0.22vw;
}

.home-title {
  position: absolute;
  top: -9%;
  left: 50%;
  width: 45vw;
  height: auto;
  transform: translateX(-50%);
  z-index: 2;
}

.home-explain {
  position: absolute;
  top: 13%;
  left: 50%;
  width: 70vw;
  height: auto;
  transform: translateX(-50%);
  z-index: 2;
}

.home-turtle {
  position: absolute;
  top: -5%;
  right: 5%;
  width: 30vw;
  transform: rotate(15deg);
  height: auto;
  z-index: 3;
}

.home-rabbit {
  position: absolute;
  left: -1%;
  bottom: -1%;
  width: 30vw;
  height: auto;
  z-index: 3;
}

.enter-button {
  position: absolute;
  left: 50%;
  top: 67.5%;
  width: 16vw;
  aspect-ratio: 3.1 / 1;
  transform: translateX(-50%);
  border: 0;
  border-radius: 1.45vw;
  background: #8caa97;
  box-shadow: 0.95vw 0.95vw 1.05vw rgb(204, 203, 203);
  color: #ede6e6;
  cursor: pointer;
  font-family: BagelFatOne-Regular, Danjo-bold-Regular, sans-serif;
  font-size: 2.7vw;
  line-height: 1;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  z-index: 4;
}

.enter-button:hover {
  background: #dfb6cc;
  box-shadow: 0.85vw 0.85vw 0.95vw rgba(53, 49, 51, 0.3);
  transform: translateX(-50%) translateY(2px);
}

.enter-button:focus-visible {
  outline: var(--line-width) solid #df82cb;
  outline-offset: 0.35vw;
}

.line {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

.line-pink-top {
  top: 17.5%;
  left: 9.5%;
  width: 20%;
  height: 30%;
  border-top: var(--line-width) solid #d692c8;
  border-left: var(--line-width) solid #d692c8;
  border-radius: 100% 0 0 0;
}

.line-pink-bottom {
  left: 22.8%;
  bottom: 11.2%;
  width: 51.4%;
  height: 0;
  border-top: var(--line-width) solid #d692c8;;
}

.line-green {
  right: 10.8%;
  bottom: 11.2%;
  width: 16%;
  height: 40.5%;
  border-right: var(--line-width) solid #436d56;
  border-bottom: var(--line-width) solid #436d56;
  border-radius: 0 0 100% 0;
}
</style>
