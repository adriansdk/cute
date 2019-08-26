<template>
  <div class="aww">
    <navbar></navbar>
    <game></game>
    <myFooter></myFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import game from "@/components/game.vue";
import myFooter from "@/components/myFooter.vue";


export default {
  name: "aww",
  components: {
    navbar, game, myFooter
  }
};
</script>