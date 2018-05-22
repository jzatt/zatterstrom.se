<template>
  <main class="container">
    <div class="scene">
      <div class="scene-gfx">
        <i :class="iconClass" class="fas icon" />
      </div>
      <div class="scene-text">
        <h1 class="title">Johan Zätterström</h1>
        <h3 class="subtitle"><span id="typed" /></h3>
      </div>
    </div>
    <div class="footer">
      <a v-for="(item, title, index) in connect" :key="index" :title="title" :href="item.url">
        <i :class="item.icon" />
      </a>
    </div>
  </main>
</template>

<script>
import NTyped from 'native-typed'

export default {
  data() {
    return {
      connect: {
        LinkedIn: {
          url: 'https://se.linkedin.com/in/zatterstrom',
          icon: 'fab fa-linkedin'
        },
        GitHub: {
          url: 'https://github.com/jzatt',
          icon: 'fab fa-github-square'
        },
        'E-mail': {
          url: 'mailto:johan@zatterstrom.se',
          icon: 'fas fa-envelope-square'
        }
      },
      skills: [
        'Frontend',
        '*.{js, vue}',
        '*.{html, php}',
        '*.{css, scss}',
        '*.{sketch, psd, ai, indd}',
        'WordPress'
      ]
    }
  },
  computed: {
    dayMode() {
      const currentHour = new Date().getHours()
      return currentHour < 19 && currentHour > 7 ? 'day' : 'night'
    },
    iconClass() {
      return this.dayMode === 'day' ? 'fa-sun' : 'fa-moon'
    }
  },
  mounted() {
    this.initTyped()
  },
  methods: {
    initTyped() {
      new NTyped(document.querySelector('#typed'), {
        strings: this.skills,
        typeSpeed: 50,
        backDelay: 1000,
        deleteSpeed: 15,
        classes: {
          cursor: 'typed-cursor'
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
