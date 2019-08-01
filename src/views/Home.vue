<template>
  <div class="home">
    <navbar></navbar>
    <header></header>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import header from "@/components/header.vue";

export default {
  name: "home",
  components: {
    navbar, header,
  }
};
</script>
