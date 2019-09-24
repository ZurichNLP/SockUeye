import axios from 'axios'

const state = {};

export default {
    getLanguages: async function() {
        let langs = (await axios.get(process.env.VUE_APP_API_PATH + '/api/languages')).data;
        if(!state.languages) {
            state.languages = langs.languagePairs.map(lp => {
                return {
                    ...langs.languages.find(l => l.key == lp.source),
                    targets: lp.targets.map(t => langs.languages.find(l => l.key == t))
                }
            });
        }
        return state.languages;
    }
}