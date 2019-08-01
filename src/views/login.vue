<template>
  <div class="login">
    <navbar></navbar>
    <firstSection></firstSection>
    <customButton></customButton>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import firstSection from "@/components/firstSection.vue";
import customButton from "@/components/customButton.vue";


export default {
  name: "login",
  components: {
    navbar, firstSection, customButton
  }
};
</script>
