<template lang="html">

  <section class="third-section">
    <div class="container">
      <h1 class="text-align-center">API's Used</h1>
      <div class="row">
        <div class="col">
          <div class="card">
            <h1>The Dog API</h1>
          </div> 
        </div>
        <div class="col">
          <div class="card">
            <h1>The Cat API</h1>
          </div>
        </div>
      </div>
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

    }
}
</script>

<style scoped lang="css">
  .third-section {
    height:500px;
    background-image: url("../assets/adam2.jpg");
    background-position: center;
    background-repeat:no-repeat;
    background-size:length 1000px 600px;
  }
</style>
