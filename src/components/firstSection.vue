<template lang="html">
  <div class="firstSection">
    <div class="container d-flex">
      <div class="text d-flex flex-wrap">
        <div class="text-container col align-items-center">
          <h1 id="rainbow">End my misery!</h1>
          <h3 >If you can't be bothered trying anymore, this is the perfect place to be. We'll help you relax with some cute fluffy faces!</h3>
          <button class="btn">Start out!</button>
        </div>
        <div class="col d-none d-lg-flex justify-content-end">
          <img src="../assets/jobs.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
  export default  {
    name: 'firstSection',
    props: [],
    mounted() {
      },
    data() {
      return {
        isHovering:false,

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.firstSection {
  height: 320px;
  color: white;
  background-color: #265573;
  z-index: 1;
}

.firstSection img {
  height: 400px;
  width: 100%;
  filter: grayscale(100%);
  margin-top: 70px;
  transition: filter 1s, margin-top 1s;
}

.col{
    max-height: 320px;
    z-index: 2;
}

.firstSection h1 {
  color: #fff;
  font-weight: bolder;
  font-size: 50px;
  padding-top: 60px;
  padding-bottom: 5px;
  text-shadow: black 2px 2px;
  text-decoration: underline;
  text-underline-position: under;
}

.firstSection h3 {
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.firstSection .btn {
  color: #fff;
  background-color: #ee76a5;
  width: 160px;
  padding: 0px;
  font-size: 25px;
  font-weight: bold;
  text-shadow: black 1.5px 1.5px;
  border: white 1px solid;
}

.firstSection .btn:hover {
  box-shadow: #f7bed7 2px 2px 2px 2px;
  border: white 1px solid;
}

.container {
  width: 95%;
  max-height: 320px;
  
}

.img{
  z-index: -1;
}

.container:hover img{
  filter: grayscale(0%);
  margin-top: 10px;

}

@media only screen and (min-width: 900px) {
  .text-container {
    padding: 0px;
  }
}
</style>
