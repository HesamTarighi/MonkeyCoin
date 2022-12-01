import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineNuxtPlugin(nuxtApp => {
    library.add(fas)
    library.add(fab)

    nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})
