<template>
  <main :class="dayMode" class="container">
    <div class="scene">
      <div class="scene-gfx">
        <i :class="iconClass" class="fas icon" />
      </div>
      <div class="scene-text">
        <h1 class="title">Johan Zätterström</h1>
        <h3 class="subtitle">*.{ js, vue, html, php, css, scss, sketch, psd }</h3>
      </div>
    </div>
    <div class="footer">
      <a href="https://se.linkedin.com/in/zatterstrom" title="LinkedIn" target="_blank"><i class="fab fa-linkedin" /></a>
      <a href="https://github.com/jzatt" title="GitHub" target="_blank"><i class="fab fa-github-square" /></a>
      <a href="mailto:&#106;&#111;&#104;&#097;&#110;&#064;&#122;&#097;&#116;&#116;&#101;&#114;&#115;&#116;&#114;&#111;&#109;&#046;&#115;&#101;" title="E-mail"><i class="fas fa-envelope-square" /></a>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    dayMode() {
      const currentHour = new Date().getHours()
      return currentHour < 24 && currentHour > 7 ? 'day' : 'night'
    },
    iconClass() {
      return this.dayMode === 'day' ? 'fa-sun' : 'fa-moon'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>
