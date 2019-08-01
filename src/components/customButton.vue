<template lang="html">

  <section class="customButton">
  <button class="btn">Start out!</button>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'customButton',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
  .customButton .btn{
    color: #fff;
    background-color: #EE76A5;
    width: 160px;
    padding: 0px;
    font-size: 25px;
    font-weight: bold;
  }
</style>
