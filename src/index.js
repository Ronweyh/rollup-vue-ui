import Index from './Index.vue'

const install = function(Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component(Index.name, Index)

    if (typeof window !== 'undefined' && window.Vue) {
        install(window.Vue)
    }
}

export default {
    install,
    Index
}