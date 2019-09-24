<template>
  <div class="translations">
    <div class="langbar" v-if="languages">
      <div class="langbar-source">
        <language-selector v-model="sourceLang" :languages="languages" />
      </div>
      <div class="switch" @click="switchLang">
        <font-awesome-icon icon="exchange-alt" />
      </div>
      <div class="langbar-target">
        <language-selector v-model="targetLang" v-if="sourceLang" :languages="sourceLang.targets" />
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
import _ from 'lodash'
import axios from 'axios'
import Spinner from './Spinner'
import LanguageSelector from './LanguageSelector'
import LanguageService from '@/services/language-service'

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
      sourceText: this.$route.query.text ? this.$route.query.text : '',
      translatedText: "",
      loading: false,
      languages: null,
      sourceLang: null,
      targetLang: null
    }
  },
  computed: {
  },
  async mounted() {
    this.languages = await LanguageService.getLanguages()
    if(this.sourceText != '') this.translate();
  },
  methods: {
    translate: _.debounce(function() {
      this.$router.push({ path: '/', query: { text: this.sourceText, sl: this.sourceLang.key, tl: this.targetLang.key } })

      if(this.sourceText == '') {
        this.translatedText = ''
        this.loading = false
        return;
      }
      
      this.loading = true;

      axios.post(process.env.VUE_APP_API_PATH + '/api/translate', {text: this.sourceText}).then((response) => {
        this.loading = false;
        this.translatedText = response.data.translation;
      });

    }, 500),
    switchLang() {
      // Todo: allow switch only under certain conditions
      this.sourceLang = this.targetLang
    }
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

.langbar { width:100%; display:flex; position:relative; background:#FAFAFA; }
.langbar-source, .langbar-target { width:50%; }
.langbar-target { padding-left:20px; }
.switch { position: absolute; width:20px; left:50%; margin-left:-10px; top:10px; z-index:1; color:#7A7A7A; cursor:pointer; }
</style>
