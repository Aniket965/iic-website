<template>
    <div class="event-page" >
        <div> 
               <div class="img-box" >
                   <img src="http://www.selecteventgroup.com/app/webroot/files/Select%20Inventory/Linens/decor/wedding-design/image1.jpg" />
                <div class="event-number" >
                    <h2>1</h2>
                    <div  class="yellow-ribbon" /> 
                </div>
                </div> 
           
        </div>
          <div> 
            <div class="white-box"> 
                <h1>COGNITIVE SKILLS </h1>
                <p>Half day workshop on Cognitive skills, design and critical thinking for faculty members and students. This will help the attendees to develop a mind frame from which they can think out of the box ideas and at the same time learn to deal with crunch situations. The workshop is planned in the third week of January 2019</p>
                </div> 
        </div>
      
    </div>
</template>
<script >
export default {
  name: 'EventsPage',

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
.yellow-ribbon {
    background: #F9E644;
    margin: 0;
    width: 89%;
    height: 0.6rem;
}
.event-number {
    bottom: -4rem;
    left: -4rem;
    position: absolute;
    width: 10vw;
    height: 10vw;
    background: white;
    box-shadow:  0px 70px 40px -50px rgba(0, 0, 0, 0.2), 0px 3px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1;
}

.img-box,.white-box {
    position: relative;
    // overflow: hidden;
    margin: 20%;
    background: white;
    height: 70vh;
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
    margin: 0;
    font-size: 6rem;
    color: black;
    text-align: left;
    margin-left: -8rem;
}
p {
    text-align: justify;
    margin: 2rem;
}

</style>
