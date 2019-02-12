<template>
    <div >
      <div class="container" >
      <img  src="https://pbs.twimg.com/media/DMDIKcyWsAEsKDj.jpg" />
      <h1  class="top-left"> IIC <br/> BVCOE </h1>
    <div class="flex-center" >
      <h2>PREVIOUS EVENTS</h2>
       <Gallery class="top-right" />
      </div>
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

@media only screen and( max-width:1300px) {
  .flex-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .top-right {
      top: 2rem;
     right: 0;
    position: relative;
  }
  .top-left {
    top: 3rem;
  }
  h1 {
    font-size: 8rem!important;
  }
  h2 {
    color: black;
    font-size: 5rem;
  }
}
@media only screen and (max-width: 720px) {
  .container {
    margin-top: 5rem;
  }
  h1 {
    font-size: 3.4rem!important;
  }
  h2 {
    color: black;
    font-size: 2.8rem;
    font-weight: 900;
    margin-left: 10%;

  }
}
</style>
