<template>
  <div class="home">
     <Header />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../layouts/Header.vue'
import Footer from '../layouts/Footer.vue'

export default {
  name: 'home',
  components: {
    Header,
    Footer
  }
}
</script>
