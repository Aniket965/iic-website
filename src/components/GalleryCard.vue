<template>
    <div class="card" >
            <img :src="uri"   />
    </div>
</template>
<script>
export default {
  name: 'GalleryCard',
   props:["uri"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
    width: fit-content;
    height: 9rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 70px 40px -50px rgba(0, 0, 0, 0.2), 0px 3px 20px rgba(0, 0, 0, 0.1);
}
img {
    height:12rem;
}

</style>
