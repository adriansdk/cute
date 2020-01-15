<template>
  <div class="login">
    <navbar></navbar>
    <firstSection></firstSection>
    <myFooter></myFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import firstSection from "@/components/firstSection.vue";
import myFooter from "@/components/myFooter.vue";

export default {
  name: "login",
  components: {
    navbar,
    firstSection,
    myFooter
  }
};
</script>
