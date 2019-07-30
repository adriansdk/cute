<template>
  <div class="home">
    <homeComponents></homeComponents>
  </div>
</template>

<script>
// @ is an alias to /src
import homeComponents from "@/components/homeComponents.vue";

export default {
  name: "home",
  components: {
    homeComponents
  }
};
</script>
