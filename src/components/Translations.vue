<template>
  <div class="translations">
    <div class="langbar">
      <div class="langbar-source">
        <language-selector :languages="languages" />
      </div>
      <div class="langbar-target">
        <language-selector :languages="languages" />
      </div>
    </div>
    <div class="text-inputs">
      <div class="source">
        <textarea-autosize :min-height="150" :max-height="1000" v-model="sourceText" placeholder="Enter some text to translate">
        </textarea-autosize>
      </div>
      <div class="target">
        <textarea-autosize :min-height="150" :max-height="1000" v-model="translatedText" :placeholder="loading ? '' : 'Translated text will appear here'" disabled>
        </textarea-autosize>
      </div>
      <div class="spinner-container" v-if="loading">
        <spinner />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import Spinner from './Spinner'
import LanguageSelector from './LanguageSelector'

export default {
  name: 'Translations',
  props: {},
  watch: {
    sourceText: function() {
      this.loading = true;
      this.translate()
    }
  },
  data() {
    return {
      sourceText: "",
      translatedText: "",
      loading: false,
      languages: [
        {
          key: 'en',
          text: 'English'
        },
        {
          key: 'de',
          text: 'German'
        },
        {
          key: 'it',
          text: 'Italian'
        }
      ]
    }
  },
  methods: {
    translate: _.debounce(function() {
      // Api call here
      this.loading = true;
      window.setTimeout(() => {
        this.loading = false;
        this.translatedText = this.sourceText + ' ' + this.sourceText;
      }, 500);

    }, 500)
  },
  components: {
    Spinner,
    LanguageSelector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.translations {
  border-radius: 10px;
  box-shadow:0px 0px 10px 0px rgba(200,200,200,1);
}
.text-inputs {
  display:flex;
  flex-direction: row;
  position:relative;
}
.source, .target {
  width:50%;
}
textarea {
  border:0;
  resize:none;
  display:inline-block;
  width:100%;
  padding:15px;
  vertical-align: top;
  font-size:22px;
  outline:0;
  background: transparent;
}
.target { background:#FAFAFA; }

.spinner-container { position:absolute; left:75%; margin-left:-32px; top:50%; margin-top:-32px; bottom:0; right:0; }

.langbar { width:100%; display:flex; }
.langbar > div { width:50%; }
</style>
