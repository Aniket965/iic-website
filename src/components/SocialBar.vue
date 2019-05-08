<template>
  <div>
    <div class="nav-grid">
     <img src="./../assets/asd.png"  />
      <div/>
      <div class="menu-grid" >
        <h2>MENU</h2>
        <v-icon scale="2.5" name="bars" style="color:#000;justify-self:center;align-self:center;"/>
      </div>
    </div>
    <div class="social-grid" >
      <div/>
    <h3> <a target="_blank" href="https://www.facebook.com/iicbvcoe/" class="nostyle" style="cursor:pointer;" >FACEBOOK</a> ⍿ <a class="nostyle"  target="_blank" href="https://www.linkedin.com/school/iicbvcoe/" style="cursor:pointer;" >LINKDEIN</a></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialBar"
};
</script>


<style scoped lang="scss">
img {
  height: 5vw;
}
.menu-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;
}
.nav-grid {
    top: 0;
    background: white;
    width: 100vw;
  display: grid;
  position: fixed;
  z-index: 2;
  grid-template-columns: 2fr 8fr 2fr;

}
.social-grid {
  display: grid;
  width: 100vh;
  z-index: 2;
  position: fixed;
  grid-template-columns: 1fr 4fr;
  transform: rotate(90deg);
  left: 1.3rem;
  overflow: hidden;
  -webkit-transform-origin: 5% 5%;
  // left: 
}
h2 {
  text-align: end;
  margin: 0;
  color: black;
//   background: pink;
  font-size: 1.7rem;
  font-weight: bold;
  padding: 1rem;
  text-align: center;
}

h3 {

  // background: pink;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  
  // padding: 1vw;
  text-align: center;
  text-indent: 10rem;
  z-index: 5;

}
.menu-grid{
  display: none;
}

@media only screen and (max-width: 1300px) {

img {
  height: 4rem;
}
}
@media only screen and (max-width: 720px) {
.nav-grid {
    box-shadow: 2px 3px 6px 0px #e2e2e2;
}
.social-grid ,.menu-grid{
  display: none;
}
}
</style>
