<template lang="html">
<body>
  <div class="firstSection container-fluid">
  <div class="text">
    <h1>End my misery!</h1>
    <h3>If you can't be bothered trying anymore, this is the perfect place to be. We'll help you relax with some cute fluffy faces!</h3>
    <button class="btn">Start out!</button>
  </div>
  </div>
</body>
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
  body{
    background-color: #265573;    
    
  }

  .firstSection {
    height: 400px;
    color:white;
    background-image: url('https://www.freepngimg.com/download/animation/69380-lilo-pelekai-stitch-drawing-free-photo-png.png');
    background-position:left;
    background-repeat: no-repeat;
    background-size: 250px 250px;
  }

  .firstSection .text{
    margin-left: 350px;
    padding-top: 110px;
    padding-right: 20%;
  }

  .firstSection h1{
    color:#EE76A5;
    font-weight: bolder;
    font-size: 50px;
  }

  .firstSection h3{
    font-size: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .firstSection .btn{
    color: #fff;
    background-color: #EE76A5;
    width: 160px;
    padding: 0px;
    font-size: 25px;
    font-weight: bold;
    
  }

  .firstSection .btn:hover{
    box-shadow:#F7BED7 3px 3px;
    border: white 1px solid; 
    border-bottom: 0px;
    border-right: 0px;
  }

  .container-fluid{
    width: 75%
  }


</style>
