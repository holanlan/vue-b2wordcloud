import VueWordcloud from './components/index.vue'
export function install(Vue) {
    Vue.component('VueWordcloud', VueWordcloud)
}

const plugin = {
    install
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin
