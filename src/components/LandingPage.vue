<template>
    <div >
      <div class="container" >
      <img  src="https://pbs.twimg.com/media/DMDIKcyWsAEsKDj.jpg" />
      <h1  class="top-left"> IIC <br/> BVCOE </h1>
      <Gallery class="top-right" />
      </div>
      
    </div>
</template>
<script >
import Gallery from './Gallery.vue'
export default {
  name: 'LandingPage',
  components:{
    Gallery
  }
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
  left: 2rem;
  font-size: 200px;
  font-weight: 900;
}
.top-right {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 5rem;
  right: -2rem;
}
h1 {
  padding-top: 100px;

}
img {
  width: 100%;
  filter: grayscale(0.2) blur(1px);

}
</style>
