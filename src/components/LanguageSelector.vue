<template>
    <b-dropdown id="lang" :text="value ? value.name : 'Select language'" class="m-md-2">
        <b-dropdown-item :active="l == value" @click="select(l)" v-for="l in languages" v-bind:key="l.key">{{l.name}}</b-dropdown-item>
    </b-dropdown>
</template>

<script>
export default {
  name: 'LanguageSelector',
  props: ['value', 'languages'],
  data() {
    return {}
  },
  watch: {
    languages: function() {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    select(l) {
      this.$emit('input', l)
    },
    init() {
      if(this.languages.indexOf(this.value) != -1)
        return;
      this.$emit('input', this.languages[0])
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#lang { 
    width:100%;
    margin: 0!important;
}
</style>

<style>
#lang > button {
    background: #FAFAFA;
    color: #8F8F8F;
    text-align:left;
    border: 0;
    padding: 10px;
 }
</style>