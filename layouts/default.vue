<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <nuxt-link class="navbar-brand" to="/"><img src="~assets/img/logoHand.png" alt=""></nuxt-link>
    <button @click="toggleMenu()" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{show : isOpen}">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" @click.native='toggleMenu' to="/">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" @click.native='toggleMenu' to="/actus">Actualités</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" @click.native='toggleMenu' to="/contact">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
  <nuxt/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isOpen : false
    }
  },
  methods : {
    toggleMenu(){
      this.isOpen = !this.isOpen
    }
  }
  
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.navbar-brand img{
  max-height: 60px;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

