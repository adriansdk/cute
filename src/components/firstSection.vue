<template lang="html">
  <div class="firstSection">
    <div class="container-fluid d-flex">
      <div class="text d-flex flex-wrap">
        <h1>End my misery!</h1>
        <h3 >If you can't be bothered trying anymore, this is the perfect place to be. We'll help you relax with some cute fluffy faces!</h3>
        <button class="btn">Start out!</button>
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
}


.firstSection img {
  height: 320px;
  width: 320px;
  filter: grayscale(100%);
}

.firstSection h1 {
  color: #fff;
  font-weight: bolder;
  font-size: 40px;
  padding-top: 30px;
  text-shadow: black 2px;
  text-decoration: underline;
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
}

.firstSection .btn:hover {
  box-shadow: #f7bed7 2px 2px 2px 2px;
  border: white 1px solid;
  border-bottom: 0px;
  border-right: 0px;
}

.container-fluid {
  padding: 0px 25px;
}
</style>
