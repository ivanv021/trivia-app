<template>
  <div>
    <p>Chuck joke:</p>
    <p>{{ joke }}</p>
  </div>
</template>

<script>
import store from "./../store";
console.log(store);
export default {
  name: "chuck",

  computed: {
    joke() {
      return store.getters.getJoke;
    }
  },
  beforeRouteEnter(to, from, next) {
    store.dispatch("getRandomJoke").then(() => {
      next();
    });
  }
};
</script>

<style>
</style>