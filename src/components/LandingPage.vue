<template>
    <div class="landing-page" >
      <div class="container" >
      <img  src="https://static.videezy.com/system/resources/thumbnails/000/002/758/original/earth_from_space.jpg" />
      <h1  class="top-left"> IIC <br/> BVCOE </h1>
      </div>
    </div>
</template>
<script >
export default {
  name: 'LandingPage',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container  {
  position: relative;
  text-align: left;
  color: white;
}
.top-left {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 2rem;
  left: 16px;
  font-size: 200px;
}
.landing-page {
  width: 90vw;
  margin-top: 5vw;
  margin-left: 5vw;
    margin-right: 5vw;
}
h1 {
  padding-top: 100px;

}
img {
  width: 100%;
}
</style>
