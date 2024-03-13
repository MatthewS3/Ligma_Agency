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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');


#app {
  font-family: "Playfair Display", serif;
  text-align: center;
  background-color: black;
}

</style>
