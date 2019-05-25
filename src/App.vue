<template>
  <main :style="{ 'background-image': backgroundPattern }" class="container">
    <div class="scene">
      <div class="scene-text">
        <h1 class="title">
          Johan Zätterström
        </h1>
        <h3 class="subtitle">
          <span id="typed" />
        </h3>
      </div>
    </div>
    <div class="footer">
      <a
        v-for="(item, key) in connect"
        :key="key"
        :title="key"
        :href="item.url"
      >
        <i :class="item.icon" />
      </a>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import _debounce from 'lodash/debounce'
import Trianglify from 'trianglify'
import NTyped from 'native-typed'

interface Social {
  [key: string]: {
    url: string
    icon: string
  }
}

interface Browser {
  height: number
  width: number
}

@Component
export default class App extends Vue {
  browser: Browser = {
    height: 300,
    width: 500,
  }

  connect: Social = {
    LinkedIn: {
      url: 'https://se.linkedin.com/in/zatterstrom',
      icon: 'fab fa-linkedin',
    },
    GitHub: {
      url: 'https://github.com/jzatt',
      icon: 'fab fa-github-square',
    },
  }

  skills: [
    'Frontend',
    '*.{js, ts, vue}',
    '*.{html, php}',
    '*.{css, scss}',
    '*.{sketch, psd, ai, indd}',
    'WordPress',
  ]

  created() {
    this.getWindowSize()
    window.addEventListener('resize', _debounce(this.getWindowSize, 150))
  }

  mounted() {
    this.initTyped()
    console.log('You looking for errors ey? ;)')
  }

  get backgroundPattern() {
    const pattern = Trianglify({
      width: this.browser.width,
      height: this.browser.height,
      cell_size: Math.floor(Math.random() * 100) + 40,
      variance: 0.65,
      x_colors: 'YlGnBu'
    }).png()
    return (
      'url(data:image/png;base64,' +
      pattern.substr(pattern.indexOf('base64') + 7) +
      ')'
    )
  }

  getWindowSize() {
    this.browser.height = window.innerHeight
    this.browser.width = window.innerWidth
  }

  initTyped() {
    new NTyped(document.querySelector('#typed'), {
      strings: [
        'Frontend',
        '*.{js, ts, vue}',
        '*.{html, php}',
        '*.{css, scss}',
        '*.{sketch, psd, ai, indd}',
        'WordPress',
      ],
      typeSpeed: 50,
      backDelay: 1000,
      deleteSpeed: 15,
      classes: {
        cursor: 'typed-cursor'
      }
    })
  }
}
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
