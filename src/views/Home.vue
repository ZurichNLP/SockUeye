<template>
  <div>
    <NavBar />
    <div class="container-fluid">
      <Translations />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Translations from '@/components/Translations.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'home',
  components: {
    Translations,
    NavBar
  }
}
</script>

<style scoped>
.container-fluid { padding-top:30px; max-width:1020px; }
</style>