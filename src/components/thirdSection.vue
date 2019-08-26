<template lang="html">

  <section class="third-section">
    <div class="container">
      <h1 class="text-left">ayy</h1>   
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'third-section',
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

    },
  }

</script>

<style scoped lang="css">
.third-section {
  height: 400px;
  width: auto;
  background-image: url("../assets/adam2.jpg"),
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
}

h1{
  color: #fff;
  text-shadow: black 3px 3px;
  font-weight: bolder;
  font-size: 50px;
  padding-top: 15px;
  text-decoration: underline;
  text-underline-position: under;
}

h1:hover{

}

p{
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: black;
}

.container{
  width: 60%;
}
</style>
