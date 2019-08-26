<template lang="html">

  <section class="third-section">
    <div class="container">
      <h1 class="text-left link"><router-link to="/aww" class="nav-link">Cats vs Dogs</router-link></h1>   
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
  background-size: 75% auto;
}

.link a{
  color: #fff;
  text-shadow: black 3px 3px;
  font-weight: bolder;
  font-size: 50px;
  padding-top: 15px;
  text-decoration: underline;
  text-underline-position: under;
}

.link a:hover{
  color: #ee76a5;
}

p{
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: black;
}

.container{
  width: 95%;
}
</style>
