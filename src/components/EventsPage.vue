<template>
  <div class="event-page">
    <div class="img-box">
      <img :src="getImgUrl(number)">
      <div class="event-number">
        <h4>{{ number }}</h4>
        <div class="yellow-ribbon"/>
      </div>
    </div>

    <div class="white-box">
      <h1>{{title}}</h1>
      <p>{{desp}}</p>
    </div>
  </div>
</template>
<script >
export default {
  name: "EventsPage",
  props: ["title", "desp", "number", "url"],
  methods: {
    getImgUrl(number) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + number + ".png");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h4 {
  margin: 0;
  margin-top: 1rem;
  margin-right: 2rem;
  font-size: 120px;
  line-height: 8rem;
  font-weight: 700;
  text-align: end;
  color: black;
}
.yellow-ribbon {
  background: #f9e644;
  margin: -10px;
  width: 89%;
  height: 0.6rem;
}
.event-number {
  bottom: -4rem;
  left: -6rem;
  position: absolute;
  width: 10vw;
  height: 10vw;
  background: white;
  box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2),
    0px 3px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
}

.img-box,
.white-box {
  position: relative;
  // overflow: hidden;
  margin: 20%;
  background: white;
  height: 70vh;
  min-height: fit-content;
}
.white-box {
  overflow: visible;
}
img {
  height: 100%;
  width: 100%;
}
.event-page {
  margin-top: 10vh;
  min-height: 100vh;
  background: #eee;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
h1 {
  font-weight: 900;
  margin: 0;
  font-size: 6rem;
  color: black;
  text-align: left;
  margin-left: -8rem;
}
p {
  text-align: justify;
  margin: 2rem;
  font-size: 1.5rem;
}
@media only screen and (max-width: 1300px) {
  .event-page {
    grid-template-columns: 1fr;
    overflow-x: hidden;
  }
  .event-number {
    width: 150px;
    height: 150px;
  }
  h1 {
    margin-left: -5rem;
  }
  p {
    font-size: 1.4rem;
  }
}
@media only screen and (max-width: 720px) {
  .event-number {
    width: 120px;
    height: 120px;
    left: 2rem;
    bottom: 2rem;
  }
  h4 {
    margin-top: -0.5rem;
    font-size: 6rem;
  }
  .img-box {
    margin: 0;
    width: 100%;
  }
  .white-box {
    height: fit-content;
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    width: 90%;
    left: 5%;
  }
  .yellow-ribbon {
    position: absolute;
    bottom: 0.5rem;
  }
  h1 {
    font-size: 2.5rem;
    margin-top: 2rem;
    margin-left: 2rem;
  }
  p {
    font-size: 1.2rem;
    font-family: "Montserrat", sans-serif;
  }
}
</style>
