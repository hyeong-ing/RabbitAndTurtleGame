# 🐰 토끼와 거북이 경주게임 🐢

<br/>

<p align="center"> 

 <br/>
 프론트엔드의 이해를 높이기 위해 Vue로 간단한 게임을 만들어봤습니다. <br/>
 Java로는 주로 서버 로직이나 데이터 처리 흐름을 구현하는데,<br/>
 프론트엔드에서는 요소를 직접 움직이며 시각적 자극을 더 다양하게 줄 수 있다는 점이 흥미로웠습니다. <br/>
 그래서 실제 코드는 어떻게 작성하는지 궁금해서 바로 프로젝트를 시작하게 되었습니다. <br/>
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

+ [Figma (다이어그램)](https://www.figma.com/board/JTQCqXpauKRSeEtVcoKImf/RabbitAndTurtleGame?node-id=0-1&t=9jksnkQBgMrLzgGP-1)


<br/><br/>


### 🔶 프로젝트 설명

<br/>

<p align="center"> 
  <img width="750" height="420" alt="스크린샷 2026-06-29 오후 12 45 06" src="https://github.com/user-attachments/assets/02d87f59-67a9-4434-b4e4-c6182b845ecb" />
</p>

<br/>

+ Vue와 JavaScript로 토끼와 거북이 경주 게임을 구현했습니다.
+ 게임 화면에서 현재 초를 기준으로 토끼 또는 거북이의 승자가 결정됩니다.
+ 결정된 승자에 따라 GSAP 애니메이션이 실행됩니다.
+ 경주가 종료되면 결과 문구와 폭죽 효과를 통해 사용자에게 시각적인 피드백을 제공합니다.
+ canvas-confetti로 결승선에 도착했을 때 폭죽 효과를 구현했습니다.


<br/><br/>


### 🔶 기술 스택 & 라이브러리
+ 프론트엔드: Vue 3
+ 빌드 도구 및 개발 서버: Vite
+ 배포: Vercel
+ 라이브러리 : GSAP, canvas-confetti 


<br/><br/>


### 🔶 프로젝트 목표
+ Vue 동작 방식 이해하기.
+ 화면 전환, 상태 변화, 애니메이션 처리 방식 이해하기.
+ 애니메이션 관련 라이브러리 사용해보기.
  

<br/><br/>


### 🔶 핵심 로직
1) Vue Router로 화면 분리 <br/>
vue-router 라이브러리를 사용해서 홈 화면과 게임 화면을 나눴습니다.

<br/>

+ 사용자의 버튼 클릭에 따라 /home에서 /game으로 이동하도록 구성했습니다.


```
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GameView from '@/views/GameView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeView },
    { path: '/game', component: GameView },
  ],
})

export default router
```

<br/>
<br/>

----

2) 승패 결정 <br/>

<br/>

+ 현재 초를 2로 나눈 나머지를 기준으로 승자를 결정했습니다.
+ 짝수 초에는 토끼, 홀수 초에는 거북이가 승리합니다.
```
function pickWinner() {
  const currentSeconds = new Date().getSeconds()
  return currentSeconds % 2 === 0 ? 'rabbit' : 'turtle'
}
```  

<br/>
<br/>

----

3) GSAP으로 경주 애니메이션 실행 <br/>

<br/>

+ GSAP timeline을 사용해 토끼와 거북이의 이동 애니메이션을 제어했습니다.
+ 미리 결정된 승자에 따라 먼저 결승선에 도착하는 캐릭터가 달라지도록 구성했습니다.
``` 
  timeline = gsap.timeline({
    defaults: { ease: 'power1.inOut' },
  })

  if (nextWinner === 'rabbit') {
    timeline
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
```

<br/>
<br/>

----

4) 게임 상태 관리와 결과 표시 <br/>
카운트다운, 진행 중, 종료 상태를 관리하고 결과 문구를 화면에 보여줍니다.

<br/>

+ ref와 computed를 사용해서 게임 상태와 결과 메시지를 관리했습니다.
+ 경주가 끝나면 승자 값을 저장하고, 해당 값에 따라 결과 문구를 화면에 표시했습니다.

```
const countdown = ref('')
const winner = ref('')
const status = ref('ready')

const message = computed(() => {
  if (winner.value === 'rabbit') return '토끼 승리!'
  if (winner.value === 'turtle') return '거북이 승리!'
  if (status.value === 'countdown') return '잠시 후 출발합니다'
  if (status.value === 'racing') return '경주 중입니다'
  return '준비 완료'
})

function end(nextWinner) {
  winner.value = nextWinner
  status.value = 'finished'
  celebrate(nextWinner)
}
```
<br/>
<br/>

### 🔶 문제 해결

### [ 카운트다운 타이머 중복 실행 ] <br/>

1) 문제 발생 <br/>
+ 카운트다운 중에 페이지를 벗어났다가 다시 게임 시작을 누르면 폭죽 효과가 두 번 발생하는 문제를 발견했습니다. <br/>
+ 이전 게임 흐름과 현재 게임 흐름이 동시에 실행되고 있어서 발생했던 것입니다. 

<br/>
<br/>

2) 원인 파악 <br/>
+ 카운트다운에 사용한 setTimeout이 페이지를 벗어날 때 정리되지 않았기 때문에 문제가 발생했습니다. <br/>
+ 컴포넌트가 사라져도 이전 setTimeout이 내부에서 계속 살아 있었고, 기존 비동기 흐름이 이어져 run( ), end( ), celebrate( ) 로직이 실행되었습니다.

<br/>
<br/>

3) 문제 해결 <br/>
+ setTimeout을 제어하기 위해 timerId를 저장하고 진행 중인 delay()를 중단할 수 있도록 finishDelay를 추가했습니다.  <br/>
+ 화면 이탈 시 clearDelay( )로 기존 타이머를 제거했습니다. <br/>
  
```
let timerId
let finishDelay
```

```
function clearDelay() {
  if (timerId) {
    window.clearTimeout(timerId)
    timerId = null
  }
  finishDelay?.(false)
  finishDelay = null
}
```

<br/>

+ 카운트다운이 중간에 취소되면 이후 로직이 실행되지 않도록 처리했습니다.

```
    const completed = await count()

    if (!completed || !rabbitEl.value || !turtleEl.value) return

    status.value = 'racing'
    run(pickWinner())
```


<br/>
<br/>

4) 결과 <br/>
+ 페이지에 벗어날 때 이전 타이머가 정리되면서 기존 게임 흐름이 새 게임에 영향을 주기 않게 되었습니다. <br/>
+ 이를 통해 폭죽 효과가 중복으로 실행되는 문제를 해결했습니다.

<br/>
<br/>
