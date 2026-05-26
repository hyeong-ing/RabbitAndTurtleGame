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
}

.home-title {
  position: absolute;
  top: -9%;
  left: 50%;
  width: min(45vw, 620px);
  height: auto;
  transform: translateX(-50%);
  z-index: 2;
}

.home-explain {
  position: absolute;
  top: 13%;
  left: 50%;
  width: min(70vw, 1200px);
  height: auto;
  transform: translateX(-50%);
  z-index: 2;
}

.home-turtle {
  position: absolute;
  top: -5%;
  right: 5%;
  width: min(30vw, 600px);
  transform: rotate(15deg);
  height: auto;
  z-index: 3;
}

.home-rabbit {
  position: absolute;
  left: -1%;
  bottom: -3%;
  width: min(44vw, 450px);
  height: auto;
  z-index: 3;
}

.enter-button {
  position: absolute;
  left: 50%;
  top: 67.5%;
  width: min(15vw, 280px);
  min-width: 210px;
  height: 80px;
  transform: translateX(-50%);
  border: 0;
  border-radius: 28px;
  background: #8caa97;
  box-shadow: 18px 18px 20px rgb(204, 203, 203);
  color: #ede6e6;
  cursor: pointer;
  font-family: BagelFatOne-Regular, Danjo-bold-Regular, sans-serif;
  font-size: 2.45rem;
  line-height: 1;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  z-index: 4;
}

.enter-button:hover {
  background: #dfb6cc;
  box-shadow: 16px 16px 18px rgba(53, 49, 51, 0.3);
  transform: translateX(-50%) translateY(2px);
}

.enter-button:focus-visible {
  outline: 4px solid #df82cb;
  outline-offset: 6px;
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
  border-top: 4px solid #d692c8;
  border-left: 4px solid #d692c8;
  border-radius: 100% 0 0 0;
}

.line-pink-bottom {
  left: 22.8%;
  bottom: 11.2%;
  width: 51.4%;
  height: 0;
  border-top: 4px solid #d692c8;;
}

.line-green {
  right: 10.8%;
  bottom: 11.2%;
  width: 16%;
  height: 40.5%;
  border-right: 4px solid #436d56;
  border-bottom: 4px solid #436d56;
  border-radius: 0 0 100% 0;
}

@media (max-width: 900px) {
  .home-title {
    top: -2%;
    width: 74vw;
  }

  .home-explain {
    top: 31%;
    width: 88vw;
  }

  .home-turtle {
    top: 7%;
    right: -1%;
    width: 37vw;
  }

  .home-rabbit {
    left: -8%;
    bottom: -3%;
    width: 42vw;
  }

  .enter-button {
    top: 72.5%;
    width: 40vw;
    min-width: 160px;
    height: 72px;
    border-radius: 22px;
    font-size: 1.8rem;
  }

  .line-pink-top {
    top: 15%;
    left: 5%;
    width: 34%;
    height: 30%;
  }

  .line-pink-bottom {
    left: 22%;
    bottom: 7.2%;
    width: 63%;
  }

  .line-green {
    right: 4%;
    bottom: 7.2%;
    width: 26%;
    height: 41%;
  }
}
</style>
