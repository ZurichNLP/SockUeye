import { library } from '@fortawesome/fontawesome-svg-core'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function configure(vueInstance) {
    // Add used icons here
    library.add(faExchangeAlt)

    vueInstance.component('font-awesome-icon', FontAwesomeIcon)
}