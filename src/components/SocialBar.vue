<template>
  <div>
    <div class="nav-grid">
      <div/>
      <div/>
      <div class="menu-grid" >
        <h2>MENU</h2>
        <v-icon scale="2.5" name="bars" style="color:#000;justify-self:center;align-self:center;"/>
      </div>
    </div>
    <h3>Facebook ⟷ Linkedin</h3>
  </div>
</template>

<script>
export default {
  name: "SocialBar"
};
</script>


<style scoped lang="scss">
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
h2 {
  text-align: end;
  margin: 0;
  color: black;
//   background: pink;
  font-size: 1.7rem;
  font-weight: bold;
  padding: 2rem;
  text-align: center;
}

h3 {
  overflow: hidden;
  background: white;
  font-size: 1.7rem;
  font-weight: 500;
  padding: 2rem;
  text-align: center;
  text-indent: 30rem;
  position: fixed;
  transform: rotate(90deg);
  -webkit-transform-origin: 0% 0%;
  z-index: 2;
  left: 6rem;
  width: 100vh;
  top: 0;
}
</style>
