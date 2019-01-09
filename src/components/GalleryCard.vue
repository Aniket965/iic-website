<template>
    <div class="card" >
            <img src="https://www.jpl.nasa.gov/spaceimages/images/wallpaper/PIA09178-1920x1200.jpg"   />
    </div>
</template>
<script>
export default {
  name: 'GalleryCard',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
    width: fit-content;
    height: 9rem;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2), 0px 3px 20px rgba(0, 0, 0, 0.1);
}
img {
    height:9rem;
   
}

</style>
