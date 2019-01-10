<template>
  <div id="app">
    <!-- <Frame /> -->

    <SocialBar />
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
import Frame from './components/Frame.vue';
import SocialBar from './components/SocialBar.vue';
export default {
  name: 'app',
  components: {
    LandingPage,
    Card,
    DownButton,
    Frame,
    SocialBar,
  },
};
</script>

<style lang="scss">
html,body {
    margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  font-family: 'Avenir next', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
