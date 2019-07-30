<template>
  <div class="home">
    <div id="nav navbar">
      <router-link to="/#">CUTE</router-link> |
      <router-link to="/aww">aww</router-link>
      <router-link to="/faith-restored">faith restored</router-link>
      <router-link to="/me-irl">me irl</router-link>
      <router-link to="/login">login</router-link>
    </div>
    <h1>HEY</h1>
  </div>
</template>

<script>
export default {
  name: "homeComponents",
  props: {
    msg: String
  }
};
</script>

<style scoped>

</style>
