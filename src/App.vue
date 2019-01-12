<template>
  <div id="app">
    <!-- <Frame /> -->

    <SocialBar />
    <div class="main-content">
    <LandingPage />
    <EventsPage />
    <AboutPage />
    <Footer />
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
import EventsPage from './components/EventsPage.vue';
import AboutPage from './components/AboutPage.vue'
import Footer from './components/Footer';
export default {
  name: 'app',
  components: {
    LandingPage,
    Card,
    DownButton,
    Frame,
    SocialBar,
    EventsPage,
    AboutPage,
    Footer
  },
};
</script>

<style lang="scss">
.main-content {
  width: 90vw;
  margin-top: 5vw;
  margin-left: 5vw;
  margin-right: 5vw;
  max-width: 1464px
}
html,body {
    margin: 0;
  padding: 0;
  overflow-x: hidden;
}
 @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,900');
#app {
  font-family: 'Avenir next', Helvetica, 'Nunito Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  min-width: 100;
  display: flex;
  justify-content: center;
}
#bottom-center {
  position: fixed;
  bottom: 2rem;
  align-items: center;
}
</style>
