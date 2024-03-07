<template>
  <NavBar />
  <div class="container-fluid">
    <router-view />
  </div>
  <FooterView />

</template>

<script>
// import NavBar from './components/NavBar';
// import FooterView from './components/FooterView';
// import SpinnerView from './components/SpinnerView';

// export default {
//   components: {
//     NavBar,
//     FooterView,
//     SpinnerView
//   }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
