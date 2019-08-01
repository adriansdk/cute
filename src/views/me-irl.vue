<template>
  <div class="me-irl">
    <navbar></navbar>
    <customButton></customButton>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import customButton from "@/components/customButton.vue";

export default {
  name: "me-irl",
  components: {
    navbar, customButton
  }
};
</script>
