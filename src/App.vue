<template>
  <div id="app">
    <!-- <Frame /> -->

    <SocialBar/>
    <div class="main-content">
      <LandingPage/>
      <EventsPage
        number="1"
        title="COGNITIVE SKILLS"
        desp="On 18 January 2019, BVCOE Innovation Council in association with MHRD, Govt. of India, organized a 3-hour workshop on Cognitive Skills, Critical Thinking and Entrepreneurship. Three eminent speakers from IIT and T.I.M.E. Institute addressed an audience of more than 70 students"
      />

      <EventsPage
        number="2"
        title="IPR WORKSHOP"
        desp="On 21st January 2019, BVCOE innovation Council in collaboration with IPR Cell BVCOE organised a 3-hour workshop on Patents and IPR. This workshop was scheduled under the association of MHRD's Innovation Cell(MIC). Two eminent speakers addressed an audience of more than 100 students from different disciplines. Along with students, BVCOE faculty also attended the session."
      />

      <EventsPage
        number="3"
        title="IDEATHON"
        desp="No matter what people tell you, words and ideas change the world.
To give your ideas wings and the power to change the world, BVCOE IIC endorsed by MHRD Innovation Cell presents Idea Competition.
MHRD Innovation Cell aims to encourage, inspire and enrich young students by supporting them to work with new ideas.
The participants are required to submit their ideas by 22 March 2019."
      />

      <AboutPage/>
      <Footer/>
    </div>
    <!-- <DownButton id='bottom-center'/> -->
    <!-- <Card>
    </Card>-->
  </div>
</template>
<script>
import LandingPage from "./components/LandingPage.vue";
import Card from "./components/Card.vue";
import DownButton from "./components/DownButton.vue";
import Frame from "./components/Frame.vue";
import SocialBar from "./components/SocialBar.vue";
import EventsPage from "./components/EventsPage.vue";
import AboutPage from "./components/AboutPage.vue";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    LandingPage,
    Card,
    DownButton,
    Frame,
    SocialBar,
    EventsPage,
    AboutPage,
    Footer
  }
};
</script>

<style lang="scss">
.main-content {
  width: 90vw;
  margin-top: 5vw;
  margin-left: 5vw;
  margin-right: 5vw;
  max-width: 1464px;
}
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
@import url("https://fonts.googleapis.com/css?family=Montserrat|Nunito+Sans:900");
#app {
  font-family: "Avenir next", Helvetica, "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  min-width: 100;
  display: flex;
  justify-content: center;
}
p,
a,
h3,
h2 {
  font-family: "Avenir next", Helvetica, "Montserrat", sans-serif;
}
p {
  font-family: "Montserrat", sans-serif;
}
#bottom-center {
  position: fixed;
  bottom: 2rem;
  align-items: center;
}
</style>
