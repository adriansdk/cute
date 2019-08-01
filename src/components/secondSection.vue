<template lang="html">

  <section class="secondSection">
    <div class="container">
      <div class="text">
        <h1>Having a tough day?</h1>
        <h3>We all know that the toughest days <br> require the cutest of cats. Check out our collection <br> of extremely cute cats to get you trough the day</h3>
        <button class="btn customButton">Make me happy!</button>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  import customButton from "@/components/customButton.vue"


  export default  {
    name: 'secondSection',
    components: {
      customButton,
    },

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

  .secondSection {
    background-color: #ff3;
    height: 400px;
  }
  .secondSection .container {
    background-image: url("https://i.imgur.com/q4MZUdT.png");
    background-repeat: no-repeat;
    background-position: right center;
    height: 400px;
  }

  .secondSection .text{
    text-align: left;
    padding-top: 110px;
    padding-right: 30%;
  }

  .secondSection h1{
    color:#EE76A5;
    font-weight: bolder;
    font-size: 50px;
  }

  .secondSection h3{
    font-size: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .secondSection .btn{
    color: #fff;
    background-color: #EE76A5;
    width: 220px;
    padding: 0px;
    font-size: 25px;
    font-weight: bold;
    white-space: nowrap;
  }

  .secondSection .btn:hover{
    box-shadow:#F7BED7 3px 3px;
    border: white 1px solid; 
    border-bottom: 0px;
    border-right: 0px;
  }
</style>
