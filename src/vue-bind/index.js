import Bind from "./components/Bind.vue";

function install(Vue) {
    Vue.component(Bind.name, Bind)
}

const plugin = {
    install
};





if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default plugin;
