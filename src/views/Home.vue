<template>
  <div class="home col">
    <navbar class="row"></navbar>
    <firstSection class="row"></firstSection>
    <secondSection class="row"></secondSection>
    <thirdSection class="row"></thirdSection>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import firstSection from "@/components/firstSection.vue";
import secondSection from "@/components/secondSection.vue";
import thirdSection from "@/components/thirdSection.vue";

export default {
  name: "home",
  components: {
    navbar, firstSection, secondSection, thirdSection
  }
};
</script>
