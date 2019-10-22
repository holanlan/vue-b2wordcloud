import VueWordcloud from './components/index.vue'
export function install(Vue) {
    Vue.component('VueWordcloud', VueWordcloud)
}

const plugin = {
    install
}

export default plugin

let GVue = null
if (typeof window !== 'undefined') {
    GVue = window.Vue
} else if (typeof global !== 'undefined') {
    GVue = global.Vue
}

if (GVue) {
    GVue.use(plugin)
}