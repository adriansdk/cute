<template>
  <div class="me-irl">
    <navbar></navbar>
    <myFooter></myFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import myFooter from "@/components/myFooter.vue";

export default {
  name: "me-irl",
  components: {
    navbar, myFooter
  }
};
</script>
