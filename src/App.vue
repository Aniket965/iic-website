<template>
  <div id="app">
    <Frame />
    <LandingPage />
       <DownButton id='bottom-center'/>
    <!-- <Card>
    </Card> -->
  </div>
</template>
<script>
import LandingPage from './components/LandingPage.vue';
import Card from './components/Card.vue';
import DownButton from './components/DownButton.vue';
import Frame from './components/Frame.vue'
export default {
  name: 'app',
  components: {
    LandingPage,
    Card,
    DownButton,
    Frame,
  },
};
</script>

<style lang="scss">
html,body {
    margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir next', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #eee;
  min-height: 100vh;
  min-width: 100;
}
#bottom-center {
  position: fixed;
  bottom: 2rem;
  margin-left: 48vw;
  align-items: center;
}
</style>
