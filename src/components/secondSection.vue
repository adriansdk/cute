<template lang="html">

  <section class="secondSection">
    <div class="container">
      <div class="text">
        <h1>Having a tough day?</h1>
        <h3>We all know that the toughest days require the cutest of cats. Check out our collection of extremely cute cats to get you trough the day</h3>
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
  height: 350px;
  z-index: 100;
  position: relative;
}
.secondSection .container {
  /* background-image: url("https://i.imgur.com/q4MZUdT.png");
    background-repeat: no-repeat;
    background-position: right center;
    height: 400px; */
  width: 95%;
}

.secondSection .text {
  text-align: left;
}

.secondSection h1 {
  color: #ee76a5;
  text-shadow: rgb(53, 37, 50) 2px 2px;
  font-weight: bolder;
  font-size: 50px;
  padding-top: 30px;
  margin-bottom: 10px;
  text-decoration: underline;
  text-underline-position: under;
}

.secondSection h3 {
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: black;
}

.secondSection .btn {
  color: #fff;
  background-color: #ee76a5;
  width: 220px;
  padding: 0px;
  font-size: 25px;
  font-weight: bold;
  white-space: nowrap;
  text-shadow: black 1.5px 1.5px;
  border: white 1px solid;
}

.secondSection .btn:hover {
  box-shadow: #f7bed7 3px 3px;
  border: white 1px solid;
  border-bottom: 0px;
  border-right: 0px;
}
</style>
