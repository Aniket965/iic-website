<template>
    <div>
       <slot/>
    </div>
</template>
<script>
export default {
  name: 'Card',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
    width: 300px;
    height: 200px;
    background: white;
    // border: 1px solid black;
    box-shadow:  0px 70px 40px -50px rgba(0, 0, 0, 0.2), 0px 3px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

</style>
