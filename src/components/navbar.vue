<template>
  <div class="myNav">
    <nav class="navbar navbar-expand-lg fixed-top d-flex aling-items-center">
      <router-link to="/" class="navbar-brand">CUTE</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarLinks"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarLinks">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item start">
            <router-link to="/aww" class="nav-link">aww</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faith-restored" class="nav-link"
              >faith restored</router-link
            >
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
  data() {
    return {};
  },
  methods: {},
  mounted() {
    $(function() {
      var lastScrollTop = 0;
      var $navbar = $(".navbar");
      var navbarHeight = $navbar.outerHeight();
      var movement = 0;
      var lastDirection = 0;

      $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        movement += st - lastScrollTop;

        if (st > lastScrollTop) {
          // scroll down
          if (lastDirection != 1) {
            movement = 0;
          }
          var margin = Math.abs(movement);
          if (margin > navbarHeight) {
            margin = navbarHeight;
          }
          margin = -margin;
          $navbar.css("margin-top", margin + "px");

          lastDirection = 1;
        } else {
          // scroll up
          if (lastDirection != -1) {
            movement = 0;
          }
          var margin = Math.abs(movement);
          if (margin > navbarHeight) {
            margin = navbarHeight;
          }
          margin = margin - navbarHeight;
          $navbar.css("margin-top", margin + "px");

          lastDirection = -1;
        }

        lastScrollTop = st;
        // console.log(margin);
      });
    });
  }
};
</script>

<style scoped>
.navbar {
  background-color: #ee76a5;
  width: 100%;
  height: 55px;
}

.navbar .navbar-brand,
.nav-link {
  margin: 0px;
  padding: 0px 25px;
}

.navbar .nav-item li {
  padding-right: 35px;
}

.navbar .navbar-brand {
  font-size: 28px;
}

.navbar a {
  color: white;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 24px;
  white-space: nowrap;
}

.navbar a:hover {
  color: aqua;
  text-shadow: black 2px 2px;
  transition: color 1s;
}

.navbar-toggler-icon {
  background-color: white;
}
</style>
