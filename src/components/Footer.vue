<template>
  <div class="footer">
    <div class="footer-links-grid">
      <div>
        <h2>Stay Connected</h2>
        <ul>
          <li><a href="https://www.facebook.com/iicbvcoe/ ">Facebook</a></li>
         <li><a href="https://www.linkedin.com/school/iicbvcoe/ ">Linkedin</a></li>

        </ul>
      </div>
      <div>
        <h2>About</h2>
        <ul>
  <li><a href=" http://www.bvcoend.ac.in/">BVCOE Website</a></li>
         <li><a href="http://mhrd.gov.in/MIC ">MHRD’s Innovation Council (MIC)</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-copyright">© IICBVCOE 2019</div>
  </div>
</template>
<script >
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-links-grid {
  padding: 2rem;
  background: #303c42;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    text-align: left;
    h2 {
      margin: 0;
      padding: 0;
      font-size: 1.2rem;
      font-weight: bold;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        font-size: 1rem;
        a,a:visited {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
.footer-copyright {
  margin: 0;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem; 
  background: #455a64;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  text-align: right;
}
</style>
