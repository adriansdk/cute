<template>
  <div class="myNav">
    <nav class="navbar navbar-expand-lg sticky-top d-flex aling-items-center">
      <router-link to="/" class="navbar-brand">CUTE</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarLinks">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item start">
            <router-link to="/aww" class="nav-link">aww</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faith-restored" class="nav-link">faith restored</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/me-irl" class="nav-link">me irl</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">login</router-link>
          </li>
        </ul>  
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: "navbar",
  props: {
    msg: String
  },
}

</script>

<style scoped>

.navbar{
  background-color:#EE76A5;
  width: 100%;
  height: 55px;
}

.navbar .navbar-brand, .nav-link{
  margin: 0px;
  padding: 0px 15px;
}

.navbar .navbar-brand{
  font-size: 28px;
}

.navbar a{
  color:white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 24px;
  white-space: nowrap;
}

.navbar a:hover{
  color:aqua;
  text-shadow: black 2px 2px;
  transition: color 1s;
}

.navbar-toggler-icon{
  background-color: white;
}

</style>
