import  "./icon.js"
import Lang from './components/Lang.vue'

function install(Vue) {
    Vue.component(Lang.name, Lang)    
}

const plugin = {
    install
};





if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin;