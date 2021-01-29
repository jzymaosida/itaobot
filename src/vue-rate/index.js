import "./symbol"
import Rate from './components/Rate.vue'

function install(Vue) {
    Vue.component(Rate.name, Rate)
    window.Rate = Rate
}

// export {
//     Rate
// }

// Plugin
const plugin = {
    install
};





if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin;