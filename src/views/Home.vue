<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <EForm />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import EForm from '../../packages/e-form'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    EForm
  }
}
</script>
