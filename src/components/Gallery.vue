<template>
    <div class="box" >
        <GalleryCard id="g1" name="g1" />
        <GalleryCard id="g2"  name="g2" />
        <GalleryCard id="g3"  name="g3" />
    </div>
</template>
<script>
import GalleryCard from './GalleryCard';
export default {
  name: 'Gallery',
 
  components:{
      GalleryCard,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box {
    width: fit-content;
}
#g1,#g3 {
    margin-left: 8rem;
}
#g2,#g3 {
    margin-top: -3rem;
}

</style>