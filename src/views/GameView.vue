<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRaceGame } from '@/composables/useRaceGame'

const router = useRouter()
const rabbitEl = ref(null)
const turtleEl = ref(null)

const {
  countdown,
  message,
  reset,
  running,
  start,
  winner,
} = useRaceGame({ rabbitEl, turtleEl })
</script>

<template>
  <main class="game-view">
    <section class="lane rabbit-lane" aria-label="토끼 경주 구역">
      <img src="@/assets/green1.png" alt="" class="grass rabbit-grass" />
      <img ref="rabbitEl" src="@/assets/rabbit2.png" alt="달리는 토끼" class="runner runner-rabbit" />
      <img src="@/assets/tree.png" alt="" class="tree" />
      <div class="goal rabbit-goal"></div>
    </section>

    <section class="lane turtle-lane" aria-label="거북이 경주 구역">
      <img src="@/assets/green2.png" alt="" class="grass turtle-grass" />
      <img ref="turtleEl" src="@/assets/turtle2.png" alt="달리는 거북이" class="runner runner-turtle" />
      <div class="goal turtle-goal"></div>
    </section>

    <div class="hud" aria-live="polite">
      <p class="status-text">{{ message }}</p>
      <p v-if="winner" class="winner-text">{{ winner === 'rabbit' ? '토끼가 먼저 도착했어요' : '거북이가 끝까지 해냈어요' }}</p>
    </div>

    <div v-if="countdown" class="countdown" aria-live="assertive">{{ countdown }}</div>

    <nav class="actions" aria-label="게임 조작">
      <button class="btn retry-btn" type="button" :disabled="running" @click="reset">
        다시하기
      </button>
      <button class="btn home-btn" type="button" :disabled="running" @click="router.push('/home')">
        메인화면
      </button>
      <button class="btn start-btn" type="button" :disabled="running" @click="start">
        시작
      </button>
    </nav>
  </main>
</template>

<style scoped>
.game-view {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(#f6f6d1 0 50%, #eef6fd 50% 100%);
}

.lane {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.rabbit-lane {
  top: 0;
}

.turtle-lane {
  top: 50%;
}

.grass {
  position: absolute;
  left: -5vw;
  width: 110vw;
  max-width: none;
  height: auto;
  pointer-events: none;
  z-index: 5;
}

.rabbit-grass {
  bottom: -4%;
}

.turtle-grass {
  bottom: 14%;
}

.runner {
  position: absolute;
  left: 0.8vw;
  width: 18vw;
  max-width: 300px;
  height: auto;
  will-change: transform;
  z-index: 15;
  filter: drop-shadow(0 0.7vw 0.35vw rgba(55, 72, 54, 0.16));
}

.runner-rabbit {
  top: 26%;
}

.runner-turtle {
  bottom: -8%;
}

.tree {
  position: absolute;
  top: -14%;
  left: 52%;
  width: 27vw;
  height: auto;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: 12;
}

.goal {
  position: absolute;
  left: 92%;
  width: 3%;
  height: 100%;
  border-left: 0.25vw solid white;
  border-right: 0.25vw solid white;
  z-index: 8;
}

.rabbit-goal {
  background: #dbebfa;
}

.turtle-goal {
  background: #fbfbb4;
}

.hud {
  position: absolute;
  top: 3%;
  left: 50%;
  width: 30vw;
  min-height: 5vw;
  padding: 0.9vw 1.6vw;
  transform: translateX(-50%);
  border: 0.25vw solid white;
  border-radius: 2vw;
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 1vw 2vw rgba(73, 87, 82, 0.18);
  text-align: center;
  z-index: 20;
  backdrop-filter: blur(4px);
}

.status-text,
.winner-text {
  margin: 0;
  font-family: BagelFatOne-Regular, Danjo-bold-Regular, sans-serif;
}

.status-text {
  color: #436d56;
  font-size: 1.8vw;
}

.winner-text {
  margin-top: 0.45vw;
  color: #d076ba;
  font-size: 1.2vw;
}

.countdown {
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 13vw;
  aspect-ratio: 1;
  place-items: center;
  transform: translate(-50%, -50%);
  border: 0.35vw solid white;
  border-radius: 50%;
  background: rgba(140, 170, 151, 0.9);
  color: white;
  font-family: BagelFatOne-Regular, Danjo-bold-Regular, sans-serif;
  font-size: 4vw;
  box-shadow: 0 1vw 2vw rgba(40, 54, 48, 0.2);
  z-index: 30;
}

.actions {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 25;
}

.btn {
  position: absolute;
  width: 9vw;
  aspect-ratio: 1;
  border: 0.35vw solid white;
  border-radius: 50%;
  color: #1f251f;
  cursor: pointer;
  font-family: Danjo-bold-Regular, BagelFatOne-Regular, sans-serif;
  font-size: 1.15vw;
  font-weight: bold;
  pointer-events: auto;
  transition: transform 0.2s ease, background 0.2s ease, opacity 0.2s ease;
}

.btn:hover:not(:disabled) {
  transform: translateY(-0.3vw) scale(1.04);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.retry-btn {
  top: 39%;
  left: 10%;
  background: #f8d0e5;
  transform: rotate(-30deg);
}

.retry-btn:hover:not(:disabled) {
  transform: rotate(-22deg) translateY(-0.3vw) scale(1.04);
}

.home-btn {
  top: 42%;
  left: 46%;
  background: rgba(245, 186, 250, 0.75);
}

.start-btn {
  top: 44%;
  left: 80%;
  background: rgba(130, 170, 114, 0.82);
  transform: rotate(24deg);
}

.start-btn:hover:not(:disabled) {
  transform: rotate(30deg) translateY(-0.3vw) scale(1.04);
}
</style>
