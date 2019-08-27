<template lang="html">

  <section class="game">
      <div class="row">
        <div class="col stats text-align-center">
          <div class="card">
            <img v-on:click="betOnCat()" :src="cat.url">
          </div>
            <h1  v-bind:class="{ show: !isPlaying }"> Love:{{ cat.damage }} </h1>
            <h1  v-bind:class="{ show: !isPlaying }"> Fear: {{ cat.defense }} </h1>
            <h1  v-bind:class="{ show: !isPlaying }"> Energy: {{ cat.hp }} </h1>
            <h1  v-bind:class="{ show: !isPlaying }"> Attack Speed: {{ cat.speed/1000 }} </h1>
        </div>
        <div class="col-3 text-center" v-bind:class="{ show: isPlaying }">
          <div class="container col">
            <div class="row d-flex justify-content-center">
              <h1><router-link to="/aww" class="nav-link">CATS VS DOGS</router-link></h1>
              <p>Ever wanted to make cats and dogs fight? Yeah, me neither, That's why in this website you make them LOVE each other until they run out of energy!</p>
            </div>
            <div class="row">
              <button class="btn" id="startBtn" v-on:click="generateCat(),generateDog()">I WANNA DO THAT!</button>
            </div>
            <div class="row d-flex justify-space-between">
              <button class="btn col halfBtn" v-on:click="betOnCat()">Cats!</button>  
              <button class="btn col halfBtn" v-on:click="betOnDog()">I'm a dog person</button>
            </div>
            <div class="row">
              <button class="btn" v-on:click="battle()">Time to love!</button>
            </div>
            <div class="row">
              
            </div>
          </div>
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
          <div>
            <h1  v-bind:class="{ show: !isPlaying }"> Love:{{ dog.damage }} </h1>
            <h1  v-bind:class="{ show: !isPlaying }"> Fear: {{ dog.defense }} </h1>
            <h1  v-bind:class="{ show: !isPlaying }"> Energy: {{ dog.hp }} </h1>
            <h1  v-bind:class="{ show: !isPlaying }"> Attack Speed: {{ dog.speed/1000 }} </h1>
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
        cat: {
          url:'http://pngimg.com/uploads/cat/cat_PNG50503.png',
          damage: [6,7,8,9,10,11,12,13,14,15],
          defense: [1,2,3,4,5,6],
          hp: [30,35, 40, 45, 50, 55, 60, 65, 70],
          speed: [1200, 1150, 1100, 1050, 1150, 1000, 950, 900],
          picked:false,
        },
        dog: {
          url:'http://pngimg.com/uploads/dog/dog_PNG50411.png',
          damage: [6,7,8,9,10,11,12,13,14,15],
          defense: [1,2,3,4,5,6],
          hp: [30, 35, 40, 45, 50, 55, 60, 65, 70],
          speed: [1200, 1150, 1100, 1050, 1150, 1000, 950, 900],
          picked:false,
        },
        player:{
          gold: 10,
          victories: 0,
          defeats: 0,
          draws: 0,
        },
        endedBattle: true,
        winner: false,
      }
    },
    watch: {
      
    },

    methods: {
      battleEnd:function(){
        this.endedBattle = true
        clearInterval(this.catI)
        clearInterval(this.dogI)
      },

      battle: function(){
        let catSpeed = this.cat.speed
        let dogSpeed = this.dog.speed
        console.log(catSpeed, this.cat.speed, dogSpeed, this.dog.speed)
        this.catI = setInterval(this.catAttack, catSpeed);
        this.dogI = setInterval(this.dogAttack, dogSpeed);
      },

      catAttack: function(){
        console.log('cat')
          if (this.cat.hp > 0 && this.dog.hp > 0){
            let catDamage = this.cat.damage - this.dog.defense
            this.dog.hp -= catDamage
            if(this.dog.hp <= 0){
              this.endedBattle = true
              this.dog.hp = 0
              this.player.gold += 10
              this.battleEnd()
            }
          }
       },
          
      dogAttack: function(){
        console.log('dog')
          if (this.dog.hp > 0 && this.cat.hp > 0){
            let dogDamage = this.dog.damage - this.cat.defense
            this.cat.hp -= dogDamage
            if(this.cat.hp <= 0){
              this.endedBattle = true
              this.cat.hp = 0
              this.player.gold += 10
              this.battleEnd()
            }
          }
        },
          
       betOnCat: function(){
        this.player.gold -= 5
        this.cat.picked = true
      },

       betOnDog: function(){
         this.player.gold -= 5        
        this.dog.picked = true
        this.endedBattle = false
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
                let randomSpeed = this.cat.speed[Math.floor(Math.random() * this.cat.speed.length)]
                this.cat.damage = randomDmg
                this.cat.defense =  randomDefense
                this.cat.hp = randomHp
                this.cat.speed = randomSpeed
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
                let randomSpeed = this.dog.speed[Math.floor(Math.random() * this.dog.speed.length)]
                this.dog.damage = randomDmg
                this.dog.defense =  randomDefense
                this.dog.hp = randomHp
                this.dog.speed = randomSpeed
          }
        },
        

    };
    computed: {

    }

</script>

<style scoped lang="css">
.game {
  height: 750px;
  width: auto;
  margin-top: 55px;
  padding-top: 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://i.pinimg.com/originals/a5/3c/bd/a53cbdcf2d279bfb89747fdbdbbe65d0.jpg");
  background-size: cover;
}

.card{
  margin-top: 20px;
  height: 380px;
  width: 80%;
  background-color: transparent;
  border: 0px;
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
  border: 0px;
  margin-top: 5px;
  border:2px white solid;
}

.stats{
  font-size: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #fff;
  text-shadow: black 3px 3px;
  font-weight: bolder;
}

.btn:hover {
  border-bottom: 0px;
  border-right: 0px;
}

.halfBtn{
  width: 35%;
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
  color: #fff;
  text-shadow: black 3px 3px;
  font-weight: bolder;
  font-size: 30px;
  padding-top: 15px;
}

.card img{
  height: 100%;
  width: 100%;
}

.show {
  display: none;
}
</style>
