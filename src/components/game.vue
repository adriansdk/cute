<template lang="html">
  <section class="game">
    <div class="row">
      <div class="col stats text-align-center">
        <div class="card">
          <img v-on:click="betOnCat()" :src="cat.url" />
        </div>
        <p v-bind:class="{ show: !isPlaying }">
          <i class="fas fa-heart"></i> Love:{{ cat.damage }}
        </p>
        <p v-bind:class="{ show: !isPlaying }">
          <i class="fas fa-flushed"></i> Fear: {{ cat.defense }}
        </p>
        <p v-bind:class="{ show: !isPlaying }">
          <i class="fas fa-battery-full"></i> Energy: {{ cat.hp }}
        </p>
        <p v-bind:class="{ show: !isPlaying }">
          <i class="fas fa-tachometer-alt"></i> Attack Speed:
          {{ cat.speed / 1000 }}
        </p>
      </div>
      <div class="col-4 text-center">
        <div class="container col">
          <div class="row d-flex justify-content-center">
            <h1>
              <router-link to="/aww" class="nav-link">CATS VS DOGS</router-link>
            </h1>
            <p v-bind:class="{ show: inGame }">
              Ever wanted to make cats and dogs fight? Yeah, me neither, That's
              why in this website you make them LOVE each other until they run
              out of energy!
            </p>
            <p v-bind:class="{ show: !isPlaying }">
              Who do you think will love each other more?
            </p>
          </div>
          <div class="row">
            <button
              class="btn"
              id="startBtn"
              v-bind:class="{ show: isPlaying }"
              v-on:click="generateCat(), generateDog()"
            >
              I WANNA DO THAT!
            </button>
          </div>
          <div class="row d-flex justify-space-between">
            <button
              class="btn col halfBtn show"
              v-on:click="betOnCat()"
              v-bind:class="{ choosing: choosing }"
            >
              Cats!
            </button>
            <button
              class="btn col halfBtn show"
              v-on:click="betOnDog()"
              v-bind:class="{ choosing: choosing }"
            >
              I'm a dog person
            </button>
          </div>
          <div class="row">
            <button
              class="btn"
              v-on:click="battle()"
              v-bind:class="{ show: !ready }"
            >
              {{ startMsg }}
            </button>
          </div>
          <div class="row"></div>
        </div>
        <div class="playerStats col" v-bind:class="{ show: !isPlaying }">
          <div class="row text-align-center">
            <p>Gold: {{ player.gold }}</p>
            <p>Victories: {{ player.victories }}</p>
          </div>
          <div class="row text-align-right">
            <p>Defeats: {{ player.defeats }}</p>
            <p>Draws: {{ player.draws }}</p>
          </div>
        </div>
      </div>
      <div class="col stats">
        <div class="card">
          <img :src="dog.url" />
        </div>
        <div>
          <p v-bind:class="{ show: !isPlaying }">
            <i class="fas fa-heart"></i> Love:{{ dog.damage }}
          </p>
          <p v-bind:class="{ show: !isPlaying }">
            <i class="fas fa-flushed"></i> Fear: {{ dog.defense }}
          </p>
          <p v-bind:class="{ show: !isPlaying }">
            <i class="fas fa-battery-full"></i> Energy: {{ dog.hp }}
          </p>
          <p v-bind:class="{ show: !isPlaying }">
            <i class="fas fa-tachometer-alt"></i> Attack Speed:
            {{ dog.speed / 1000 }}
          </p>
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
    // var catSound = new Audio('./assets/sound/bark.wav') // path to file
    // catSound.play()
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
        sound: "./assets/sound/meow.wav",
      },
      dog: {
        url:'http://pngimg.com/uploads/dog/dog_PNG50411.png',
        damage: [6,7,8,9,10,11,12,13,14,15],
        defense: [1,2,3,4,5,6],
        hp: [30, 35, 40, 45, 50, 55, 60, 65, 70],
        speed: [1200, 1150, 1100, 1050, 1150, 1000, 950, 900],
        picked:false,
        sound: "./assets/sound/bark.wav",
      },
      player:{
        gold: 10,
        victories: 0,
        defeats: 0,
        draws: 0,
      },
      ready: false,
      endedBattle: true,
      winner: false,
      inGame:false,
      choosing: false,
      bet: '',
      start:['Time to Love!', 'Love again!'],
      startMsg: 'Time to Love!',
    }
  },
  methods: {
    battleEnd:function(){
      this.endedBattle = true
      clearInterval(this.catI)
      clearInterval(this.dogI)
      this.startMsg = this.start[1]
      if(this.cat.hp > this.dog.hp && this.bet == 'cat'){
        this.player.gold += 10
        this.player.victories += 1
      }else if (this.dog.hp > this.cat.hp && this.bet == 'dog'){
        this.player.gold += 10
        this.player.victories += 1
      } else if (this.cat.hp > this.dog.hp && this.bet == 'dog'){
        this.player.defeats += 1
      } else if (this.cat.hp > this.dog.hp && this.bet == 'dog'){
        this.player.defeats += 1
      } else {this.player.draws += 1}
    },
    battle: function(){
      let catSpeed = this.cat.speed
      let dogSpeed = this.dog.speed
      this.startMsg = this.start[0]
      this.catI = setInterval(this.catAttack, catSpeed);
      this.dogI = setInterval(this.dogAttack, dogSpeed);
    },

    catAttack: function(){
        if (this.cat.hp > 0 && this.dog.hp > 0){
          let catDamage = this.cat.damage - this.dog.defense
          this.dog.hp -= catDamage
          var catSound = new Audio('./assets/sound/meow.wav') // path to file
          catSound.play()
          if(this.dog.hp <= 0){
            this.endedBattle = true
            this.dog.hp = 0
            this.battleEnd()
          }
        }
     },

    dogAttack: function(){
        if (this.dog.hp > 0 && this.cat.hp > 0){
          let dogDamage = this.dog.damage - this.cat.defense
          this.cat.hp -= dogDamage
          if(this.cat.hp <= 0){
            this.endedBattle = true
            this.cat.hp = 0
            this.battleEnd()
          }
        }
      },

     betOnCat: function(){
      this.player.gold -= 5
      this.ready = true
      this.choosing = false
      this.endedBattle = false
      this.bet = 'cat'
    },

     betOnDog: function(){
      this.player.gold -= 5
      this.endedBattle = false
      this.ready = true
      this.choosing = false
      this.bet = 'dog'
    },
    async generateCat(){
              try{
                  let response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                    params: { limit:1, size:"full" },
                    headers: {  "x-api-key": "7c37ab62-1cd4-4797-a6e5-1138a4581a9c"  } } ) // Ask for 1 Image, at full resolution
                  this.image = response.data[0] // the response is an Array, so just use the first item as the Image
                  this.cat.url = this.image.url
              }catch(err){
                  console.log(err)
              }
              this.isPlaying = true
              this.inGame = true
              this.choosing = true
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
              this.dog.url = response.data.message
            }catch(err){
              console.log(err)
            }
              this.isPlaying = true
              this.inGame = true
              this.choosing = true
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
</script>

<style scoped lang="css">
.game {
  height: 920px;
  width: auto;
  margin-top: 55px;
  padding-top: 10px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url("https://i.pinimg.com/originals/a5/3c/bd/a53cbdcf2d279bfb89747fdbdbbe65d0.jpg");
  background-size: cover;
}

.card {
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
  border: 2px white solid;
}

.stats {
  font-size: 18px;
  padding: 0px 15px 10px;
  color: #fff;
  text-shadow: black 3px 3px;
  font-weight: bolder;
}

.btn:hover {
  border-bottom: 0px;
  border-right: 0px;
}

.halfBtn {
  width: 100%;
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

.playerStats p {
  color: #fff;
  text-shadow: black 3px 3px;
  font-weight: bolder;
  font-size: 30px;
  padding-top: 15px;
}

.fas {
  color: #ee76a5;
  font-size: 30px;
}

p {
  color: #fff;
  text-shadow: black 3px 3px;
  font-weight: bolder;
  font-size: 28px;
  margin: 0px;
}

.card img {
  height: 100%;
  width: 100%;
}

.show {
  display: none;
}

.choosing {
  display: initial;
}
</style>
