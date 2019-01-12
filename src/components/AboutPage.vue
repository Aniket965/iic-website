<template>
  <div class="event-page">
    <div class="img-box">
      <h1>ABOUT</h1>

      <p>
        On 21st November, Ministry of Human Resource Development (MHRD), Govt. of India has established ‘MHRD’s Innovation Cell (MIC)’ to systematically foster the culture of Innovation amongst all Higher Education Institutions (HEIs). The primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes while they are informative years.
        BVCOE has thus been given the opportunity by MHRD to promote innovation and ideas among the students by becoming one of the first colleges among the colleges affiliated by Indraprastha University, New Delhi to harbour IIC (Institution’s Innovation Council).
      </p>
    </div>
  </div>
</template>
<script >
export default {
  name: "AboutPage"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  margin: 0;
  font-size: 120px;
  line-height: 8rem;
  font-weight: 700;
  text-align: end;
  color: black;
}

.img-box {
  position: relative;
  // overflow: hidden;

  max-width: 500px;
  align-self: center;
  justify-self: center;
  background: white;
  height: 70vh;
  padding: 1rem;
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
  grid-template-columns: 1fr;
}
h1 {
  margin: 2rem;
  font-weight: 900;
  font-size: 3rem;
  color: black;
  text-align: left;
}
p {
  text-align: justify;
  margin: 2rem;
}
</style>
