<template>
    <div class="box" >
        <GalleryCard id="g1" uri="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/19/shutterstock_193539209-1.jpg" />
        <GalleryCard id="g2" uri="https://www.trustech-event.com/theme/trustech_desktop_git/img/img-innovation-stage.jpg" />
        <GalleryCard id="g3" uri="https://themobilemarketer.files.wordpress.com/2013/04/event2.jpg" />
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
