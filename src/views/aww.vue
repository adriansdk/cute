<template>
  <div class="aww">
    <navbar></navbar>
    <h1>EYASK</h1>
    <header></header>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";

export default {
  name: "aww",
  components: {
    navbar
  }
};
</script>