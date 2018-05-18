<template>
  <main class="container" :class="{ day: dayMode }">
    <div class="content">
      <div class="logo">
        <i class="fas fa-spin icon" :class="iconClass"></i>
        <h1>Johan Zätterström</h1>
      </div>
      <div class="contact">
        <a href="https://se.linkedin.com/in/zatterstrom" title="LinkedIn" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://github.com/jzatt" title="GitHub" target="_blank"><i class="fab fa-github-square"></i></a>
        <a href="mailto:&#106;&#111;&#104;&#097;&#110;&#064;&#122;&#097;&#116;&#116;&#101;&#114;&#115;&#116;&#114;&#111;&#109;&#046;&#115;&#101;" title="E-mail"><i class="fas fa-envelope-square"></i></a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    dayMode() {
      const currentHour = new Date().getHours()
      return (currentHour < 19 && currentHour > 7)
    },
    iconClass() {
      return (this.dayMode) ? 'fa-sun' : 'fa-moon'
    }
  }
}
</script>

<style>
  .container {
    display: flex;
    height: 100vh;
    align-items: center;
    align-content: center;
    text-align: center;
    color: rgba(242,238,233,1);
    background: rgba(38,50,57,1);
  }

  .container.day {
    color: rgba(38,50,57,1);
    background: rgba(242,238,233,1); 
  }

  .content {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 4rem;
  }

  .logo {
    text-align: center;
    margin: 0 auto 2rem;
  }

  .icon {
    margin-bottom: 2rem;
    font-size: 7rem;
    color: rgba(234,177,55,1);
  }

  .contact a {
    display: inline-block;
    margin: 0 0.5rem;
    font-size: 3rem;
    color: rgba(207,82,82,1);
    transition: all 300ms ease-in-out;
  }

  .contact a:hover {
    color: rgba(234,177,55,1);
  }
</style>
