<template lang="html">

  <section class="game">
      <div class="row">
        <div class="col stats text-align-center">
          <div class="card">
            <img :src="cat.url">
          </div>
            <h1> Damage:{{ cat.damage }} </h1>
            <h1> Defense: {{ cat.defense }} </h1>
            <h1> HP: {{ cat.hp }} </h1>
        </div>
        <div class="col-3 text-center" v-bind:class="{ show: isPlaying }">
          <h1><router-link to="/aww" class="nav-link">Cats vs Dogs</router-link></h1>
          <p > Ever wanted to make cats and dogs fight? Yeah, me neither, but here you can do it without hurting any Cute beings! <br>BET ON ONE!</p>
          <button class="btn" v-on:click="generateCat(), betOnCat()">I'll go with Cats!</button>  
          <button class="btn" v-on:click="generateDog(), betOnDog()">Dogs probably stronger</button>
        </div>
          <div class="playerStats col-3" v-bind:class="{ show: !isPlaying }"> 
            <p> Gold: {{ player.gold }} </p>
            <p> Victories: {{ player.victories }} </p>
            <p> Defeats: {{ player.defeats }} </p>
            <p> Draws: {{ player.draws }} </p>
          </div>
        <div class="col stats">
          <div class="card">
            <img :src="dog.url">
          </div> 
            <h1> Damage:{{ dog.damage }} </h1>
            <h1> Defense: {{ dog.defense }} </h1>
            <h1> HP: {{ dog.hp }} </h1>
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
        cat: {
          url:"../cat2.png",
          damage: [1,2,3,4,5,6,7,8,9,10],
          defense: [1,2,3,4,5,6],
          hp: [30, 40, 50],
        },
        dog: {
          url:"../dog2.png",
          damage: [1,2,3,4,5,6,7,8,9,10],
          defense: [1,2,3,4,5,6],
          hp: [30, 40, 50],
        },
        player:{
          gold: 10,
          victories: 0,
          defeats: 0,
          draws: 0,
        },
         
      }
    },
    methods: {

      battle: function(){
        if (this.cat.hp > 0 && this.dog.hp > 0){
          catDamage = this.cat.damage - this.dog.defense
          this.dog.hp -= catDamage
          dogDamage = this.dog.damage - this.cat.defense
          this.cat.hp -= dogDamage
        }
      
      },

       betOnCat: function(){
        this.player.gold -= 5
      },

       betOnDog: function(){
        this.player.gold -= 5        
      },

      async generateCat(){
                try{
                    let response = await axios.get('https://api.thecatapi.com/v1/images/search', { 
                      params: { limit:1, size:"full" },
                      headers: {  "x-api-key": "7c37ab62-1cd4-4797-a6e5-1138a4581a9c"  } } ) // Ask for 1 Image, at full resolution
                    
                    this.image = response.data[0] // the response is an Array, so just use the first item as the Image
                    console.log("id:", this.image.id)
                    console.log("url:", this.image.url)
                    this.cat.url = this.image.url
                }catch(err){
                    console.log(err)
                }
                this.isPlaying = true
                let randomDmg = this.cat.damage[Math.floor(Math.random() * this.cat.damage.length)];
                let randomDefense = this.cat.defense[Math.floor(Math.random() * this.cat.defense.length)]
                let randomHp = this.cat.hp[Math.floor(Math.random() * this.cat.hp.length)]
                this.cat.damage = randomDmg
                this.cat.defense =  randomDefense
                this.cat.hp = randomHp
            },

      async generateDog(){
        try{

          
          let response = await axios.get('https://dog.ceo/api/breeds/image/random', { params: { limit:1, size:"500px 500px" } });  
                  console.log(response)
                  console.log("url:", response.data.message)
                  console.log("status", response.data.status)
                this.dog.url = response.data.message
              }catch(err){
                console.log(err)
              }
                this.isPlaying = true
                let randomDmg = this.dog.damage[Math.floor(Math.random() * this.dog.damage.length)];
                let randomDefense = this.dog.defense[Math.floor(Math.random() * this.dog.defense.length)]
                let randomHp = this.dog.hp[Math.floor(Math.random() * this.dog.hp.length)]
                this.dog.damage = randomDmg
                this.dog.defense =  randomDefense
                this.dog.hp = randomHp
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
  background-image: url("https://i.pinimg.com/originals/a5/3c/bd/a53cbdcf2d279bfb89747fdbdbbe65d0.jpg");
  background-size: cover;
}

.card{
  margin-top: 20px;
  height: 500px;
  width: 100%;
  border: 5px solid #ee76a5;
}
.btn {
  color: #fff;
  background-color: #ee76a5;
  width: 50%;
  padding: 5px 0px;
  font-size: 25px;
  font-weight: bold;
  white-space: nowrap;
  text-shadow: black 1.5px 1.5px;
  border: 0px;
  margin-top: 5px;
}

.stats{
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: black;
}

.btn:hover {
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

.playerStats p{
  font-size: 18px;
  color: black;
  text-shadow: 2px 2px white;
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

.card img{
  height: 100%;
  width: 100%;
}

.show {
  display: none;
}
</style>
