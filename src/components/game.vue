<template lang="html">

  <section class="game">
    <div class="container flex">
      <div class="row justify-content-center">
        <h1><router-link to="/aww" class="nav-link">aww</router-link></h1>
        <p> Ever wanted to make cats and dogs fight? Yeah, me neither, but here you can do it without hurting any Cute beings!</p>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <button v-on:click="loadDogImage()">The Dog API</button>
          </div> 
        </div>
        <div class="col">
          <div class="card">
            <button v-on:click="loadCatImage()">The Cat API</button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'game',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      async loadCatImage()
            {
                try{
                    axios.defaults.headers.common['x-api-key'] = "7c37ab62-1cd4-4797-a6e5-1138a4581a9c" // Replace this with your API Key
                    let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ) // Ask for 1 Image, at full resolution
                    
                    this.image = response.data[0] // the response is an Array, so just use the first item as the Image
                    console.log("-- Image from TheCatAPI.com")
                    console.log("id:", this.image.id)
                    console.log("url:", this.image.url)
                }catch(err){
                    console.log(err)
                }
            },

      async loadDogImage()
          {
              try{
                  let response = await axios.get('https://dog.ceo/api/breeds/image/random', { params: { limit:1, size:"full" } } ) 
                  console.log(response)
                  console.log("url:", response.data.message)
                  console.log("status", response.data.status)
              }catch(err){
                  console.log(err)
              }
          }
        },
        

    };
    computed: {

    }

</script>

<style scoped lang="css">

.game{
  height: 300px;
}
.game {
  height: 400px;
  width: auto;
  background-image: url("../assets/adam2.jpg"),
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
  clip-path: circle(61.4% at 50% 61%);
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
  
</style>
