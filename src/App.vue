<template>
  <div id="app">
    <!-- <Frame /> -->

    <SocialBar />
    <div class="main-content">
    <LandingPage />
    <EventsPage />
    </div>
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
import EventsPage from './components/EventsPage.vue'
export default {
  name: 'app',
  components: {
    LandingPage,
    Card,
    DownButton,
    Frame,
    SocialBar,
    EventsPage
  },
};
</script>

<style lang="scss">
.main-content {
  width: 90vw;
  margin-top: 5vw;
  margin-left: 5vw;
  margin-right: 5vw;
}
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
