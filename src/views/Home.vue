<template>
  <div class="home">
    <navbar></navbar>
    <firstSection></firstSection>
    <secondSection></secondSection>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import firstSection from "@/components/firstSection.vue";
import secondSection from "@/components/secondSection.vue";

export default {
  name: "home",
  components: {
    navbar, firstSection, secondSection
  }
};
</script>
