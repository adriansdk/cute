<template lang="html">

  <section class="secondSection">
    <div class="container">
    <div class="row">
      <div class="text col">
        <div class="row">
        <h1>Having a tough day?</h1>
        <h3>We all know that the toughest days require the cutest of cats. Check out our collection of extremely cute cats to get you trough the day</h3>
        <button class="btn myFooter">Make me happy!</button>
        </div>
        <img id="pombo" class="row d-none d-md-flex " src="../assets/calopsita.png" data-aos="flip-left" data-aos-id="pombo">
      </div>
      <div id="gato" class="col gato d-none d-md-flex " data-aos="fade-down-left" data-aos-duration="10000" data-aos-delay="500" data-aos-id="pombo">
        <img src="../assets/cat.png">
      </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'secondSection',
    components: {
      
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
  height: 700px;
  z-index: 100;
  position: relative;
  clip-path: polygon(3% 3%, 92% 12%, 100% 85%, 0 100%);
}
.secondSection .container {
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
  padding-top: 80px;
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

img {
  padding-top: -40px;
  height: 400px;
  width: auto;
  float: left;
}

.gato img {
  padding-top: 100px;
  height: 500px;
  width: auto;
}
</style>
