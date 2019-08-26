<template lang="html">

  <section class="game">
    <div class="container justify-content-center">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="card">
            <img :src="catPic">
            <button class="btn" v-on:click="loadCatImage()">The Cat API</button>
          </div>
        </div>
        <div class="col-4 text-container text-center">
          <h1><router-link to="/aww" class="nav-link">Cats vs Dogs</router-link></h1>
          <p class=" " v-bind:class="{ show: isPlaying }"> Ever wanted to make cats and dogs fight? Yeah, me neither, but here you can do it without hurting any Cute beings! <br>BET ON ONE!</p>
        </div>
        <div class="col-4">
          <div class="card">
            <img :src="dogPic">
            <button class="btn" v-on:click="loadDogImage()">The Dog API</button>
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
        isPlaying: false,
        dogPic: 0,
        catPic: 0,

      }
    },
    methods: {
      async loadCatImage(){
                try{
                    axios.defaults.headers.common['x-api-key'] = "7c37ab62-1cd4-4797-a6e5-1138a4581a9c" // Replace this with your API Key
                    let response = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } } ) // Ask for 1 Image, at full resolution
                    
                    this.image = response.data[0] // the response is an Array, so just use the first item as the Image
                    console.log("-- Image from TheCatAPI.com")
                    console.log("id:", this.image.id)
                    console.log("url:", this.image.url)
                    this.catPic = this.image.url
                }catch(err){
                    console.log(err)
                }
                this.isPlaying = true
            },

      async loadDogImage(){
        try{
          let response = await axios.get('https://dog.ceo/api/breeds/image/random', { params: { limit:1, size:"full" } } ) 
                  console.log(response)
                  console.log("url:", response.data.message)
                  console.log("status", response.data.status)
                this.dogPic = response.data.message
              }catch(err){
                console.log(err)
              }
                this.isPlaying = true
          }
        },
        

    };
    computed: {

    }

</script>

<style scoped lang="css">
.game {
  height: 670px;
  width: auto;
  margin-top: 55px;
  padding-top: 10px;
  background-color: #ff3;
  clip-path: polygon(96% 0, 100% 31%, 94% 96%, 0 100%, 0 55%, 5% 3%);
}

.card{
  height: 300px;
  width: 300px;
}
.btn {
  color: #fff;
  background-color: #ee76a5;
  width: 100%;
  padding: 5px 0px;
  font-size: 25px;
  font-weight: bold;
  white-space: nowrap;
  text-shadow: black 1.5px 1.5px;
}

.btn:hover {
  box-shadow: #f7bed7 3px 3px;

  border-bottom: 0px;
  border-right: 0px;
}

a {
  color: #ee76a5;
  text-shadow: black 3px 3px;
  font-weight: bolder;
  font-size: 50px;
  padding-top: 15px;
  text-decoration: underline;
  text-underline-position: under;
}

a:hover {
  color: aqua;
  text-shadow: black 3px 3px;
  text-decoration: underline;
  text-underline-position: under;
  transition: color 1s;
}

p {
  font-size: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: black;
  text-shadow: white 2px 2px;
  font-weight: bold;
  text-align: center;
}

.container {
  width: 95%;
}

.text-container {
  width: 50%;
}

.show {
  display: none;
}
</style>
