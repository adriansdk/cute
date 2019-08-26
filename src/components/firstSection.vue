<template lang="html">
  <div class="firstSection container-fluid">
  <div class="text">
    <h1 class="transition">End my misery!</h1>
    <h3 class="transition">If you can't be bothered trying anymore, this is the perfect place to be. We'll help you relax with some cute fluffy faces!</h3>
    <button class="btn">Start out!</button>
    <img src="../assets/jobs.png">
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
body {
  background-color: #265573;
}

.firstSection {
  height: 430px;
  color: white;
}

.firstSection img {
  height: 400px;
  width: 400px;
  position: absolute;
  left: 50%;
  right: 50%;
  top: 9%;

  filter: grayscale(100%);
}

.text {
  margin-left: 350px;
  padding-top: 110px;
  padding-right: 20%;
  filter: grayscale(0%);
}

.firstSection h1 {
  color: #ee76a5;
  font-weight: bolder;
  font-size: 50px;
}

.firstSection h3 {
  font-size: 25px;
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
  width: 75%;
}
</style>
