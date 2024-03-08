<template>
  <NavBar />
  <div class="container-fluid">
    <router-view />
  </div>
  <FooterView />

</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterView from './components/FooterView.vue';
// import SpinnerView from './components/SpinnerView.vue';

export default {
  components: {
    NavBar,
    FooterView,
    // SpinnerView
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
