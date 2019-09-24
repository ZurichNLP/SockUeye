<template>
  <div class="container-fluid">
    <h1>Demo for neural machine translation</h1>
    <Translations msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Translations from '@/components/Translations.vue'

export default {
  name: 'home',
  components: {
    Translations
  }
}
</script>

<style scoped>
.container-fluid { padding-top:30px; max-width:1020px; }
</style>