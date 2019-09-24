<template>
    <b-dropdown v-bind:value="value" id="lang" :text="selectedLanguage.text" class="m-md-2">
        <b-dropdown-item :active="l == selectedLanguage" @click="select(l)" v-for="l in languages" v-bind:key="l.key">{{l.text}}</b-dropdown-item>
    </b-dropdown>
</template>

<script>
export default {
  name: 'LanguageSelector',
  props: ['value', 'languages'],
  data() {
    return {
      selectedLanguage: this.value ? this.value : this.languages[0]
    }
  },
  methods: {
    select(l) {
      this.selectedLanguage = l;
      this.$emit('input', l.value)
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