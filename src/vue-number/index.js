import Number from './components/Number.vue'

function install(Vue) {
    Vue.component(Number.name, Number)
}

const plugin = {
    install
};





if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin;