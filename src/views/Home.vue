<template>
  <div class="home">
    <navbar></navbar>
    <firstSection></firstSection>
    <secondSection></secondSection>
    <thirdSection></thirdSection>
    <myFooter></myFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import firstSection from "@/components/firstSection.vue";
import secondSection from "@/components/secondSection.vue";
import thirdSection from "@/components/thirdSection.vue";
import myFooter from "@/components/myFooter.vue"

export default {
  name: "home",
  components: {
    navbar, firstSection, secondSection, thirdSection, myFooter,
  }
};
</script>
