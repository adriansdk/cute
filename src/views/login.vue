<template>
  <div class="login">
    <navbar></navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";

export default {
  name: "login",
  components: {
    navbar
  }
};
</script>
