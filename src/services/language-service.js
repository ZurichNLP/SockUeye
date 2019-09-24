const exampleAPIResponse = {
    languages: [
        {
            key:'en',
            name: 'English'
        },
        {
            key:'de',
            name: 'German'
        },
        {
            key:'fr',
            name: 'French'
        }
    ],
    languagePairs: [
        {
            source: "de",
            targets: ["fr", "en"]
        },
        {
            source: "en",
            targets: ["de"]
        }
    ],
}

const state = {};

export default {
    getLanguages: async function() {
        if(!state.languages) {
            state.languages = exampleAPIResponse.languagePairs.map(lp => {
                return {
                    ...exampleAPIResponse.languages.filter(l => l.key == lp.source)[0],
                    targets: lp.targets.map(t => exampleAPIResponse.languages.filter(l => l.key == t)[0])
                }
            });
        }
        return state.languages;
    }
}