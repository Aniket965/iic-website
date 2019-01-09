<template>
    <div>
        <div>
           <v-icon scale=1.5 name="arrow-down" style="color:#7C7C7C;" />
        </div>
    </div>
</template>
<script >
import Card from './Card';
export default {
  name: 'DownButton',
  components:{
      Card,
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
    width: 4rem;
    height: 6rem;
    background: white;
    // border: 1px solid black;
    box-shadow:  0px 70px 40px -50px rgba(0, 0, 0, 0.2), 0px 3px 20px rgba(0, 0, 0, 0.1);
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
