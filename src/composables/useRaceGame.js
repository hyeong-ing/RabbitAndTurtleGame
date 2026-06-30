import { computed, nextTick, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import confetti from 'canvas-confetti'

const COUNTDOWN_STEPS = ['3', '2', '1', '출발!']

function pickWinner() {
  const currentSeconds = new Date().getSeconds()
  return currentSeconds % 2 === 0 ? 'rabbit' : 'turtle'
}

export function useRaceGame({ rabbitEl, turtleEl }) {
  const countdown = ref('')
  const winner = ref('')
  const status = ref('ready')

  let timeline
  let timerId
  let finishDelay

  const running = computed(() => status.value === 'countdown' || status.value === 'racing')
  const message = computed(() => {
    if (winner.value === 'rabbit') return '토끼 승리!'
    if (winner.value === 'turtle') return '거북이 승리!'
    if (status.value === 'countdown') return '잠시 후 출발합니다'
    if (status.value === 'racing') return '경주 중입니다'
    return '준비 완료'
  })

  function clearDelay() {
    if (timerId) {
      window.clearTimeout(timerId)
      timerId = null
    }

    finishDelay?.(false)
    finishDelay = null
  }

  function delay(duration) {
    clearDelay()

    return new Promise((resolve) => {
      finishDelay = resolve
      timerId = window.setTimeout(() => {
        timerId = null
        finishDelay = null
        resolve(true)
      }, duration)
    })
  }

  function clear() {
    clearDelay()

    timeline?.kill()
    timeline = null

    if (rabbitEl.value) gsap.killTweensOf(rabbitEl.value)
    if (turtleEl.value) gsap.killTweensOf(turtleEl.value)
  }

  function reset() {
    clear()
    countdown.value = ''
    winner.value = ''
    status.value = 'ready'

    gsap.set([rabbitEl.value, turtleEl.value].filter(Boolean), {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
    })
  }

  async function count() {
    status.value = 'countdown'

    for (const step of COUNTDOWN_STEPS) {
      countdown.value = step
      const completed = await delay(step === '출발!' ? 50 : 650)

      if (!completed) return false
    }

    countdown.value = ''
    return true
  }

  function celebrate(nextWinner) {
    const origin = nextWinner === 'rabbit'
      ? { x: 0.88, y: 0.25 }
      : { x: 0.88, y: 0.72 }

    confetti({
      particleCount: 110,
      spread: 70,
      startVelocity: 36,
      origin,
      colors: ['#d692c8', '#8caa97', '#f8d0e5', '#fbfbb4', '#ffffff'],
    })
  }

  function end(nextWinner) {
    winner.value = nextWinner
    status.value = 'finished'
    celebrate(nextWinner)
  }

  function run(nextWinner) {
    const laneX = (ratio) => () => window.innerWidth * ratio
    const treeX = laneX(0.46)
    const finishX = laneX(0.82)

    timeline = gsap.timeline({
      defaults: {
        ease: 'power1.inOut',
      },
    })

    if (nextWinner === 'rabbit') {
      timeline
          .to(rabbitEl.value, {
            x: () => window.innerWidth * 0.42,
            y: -10,
            rotate: -4,
            duration: 2,
            ease: 'power2.out',
          }, 0)
          .to(rabbitEl.value, {
            y: 4,
            rotate: -8,
            duration: 0.65,
            ease: 'sine.inOut',
          })
          .to(rabbitEl.value, {
            y: -8,
            rotate: 3,
            duration: 0.3,
            ease: 'power2.out',
          })
          .to(rabbitEl.value, {
            x: finishX,
            y: -12,
            rotate: 3,
            duration: 2.2,
            ease: 'power3.out',
            onComplete: () => end('rabbit'),
          })
          .to(turtleEl.value, {
            x: () => window.innerWidth * 0.72,
            y: 5,
            duration: 5.8,
          }, 0)
    } else {
      timeline
          .to(rabbitEl.value, {
            x: () => window.innerWidth * 0.42,
            y: -10,
            duration: 2,
            ease: 'power2.out',
          }, 0)
          .to(rabbitEl.value, {
            rotate: -8,
            y: 2,
            duration: 0.55,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: 1,
          })
          .to(rabbitEl.value, {
            x: () => window.innerWidth * 0.72,
            y: -6,
            rotate: 2,
            duration: 2.0,
            ease: 'power1.out',
          })
          .to(turtleEl.value, {
            x: finishX,
            y: 2,
            duration: 5.4,
            ease: 'power1.out',
            onComplete: () => end('turtle'),
          }, 0)
    }
  }

  async function start() {
    if (running.value) return

    reset()
    await nextTick()
    const completed = await count()

    if (!completed || !rabbitEl.value || !turtleEl.value) return

    status.value = 'racing'
    run(pickWinner())
  }

  onBeforeUnmount(clear)

  return {
    countdown,
    message,
    reset,
    running,
    start,
    status,
    winner,
  }
}
