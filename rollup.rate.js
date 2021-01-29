import commonjs from '@rollup/plugin-commonjs';
// import PluginVue from "rollup-plugin-vue";
// import babel from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import VuePlugin from 'rollup-plugin-vue'
import {terser} from "rollup-plugin-terser";
import del from 'rollup-plugin-delete'

export default {
    input: 'src/vue-rate/index.js',
    output: [{
        file: 'dist/vue-score-rate.esm.js',
        format: 'esm',
        name: "Rate",
        globals: {
            vue: "Vue"
        },
    }, {
        file: 'dist/vue-score-rate.umd.js',
        format: 'umd',
        name: "Rate",
        globals: {
            vue: "Vue"
        },
    }],
    plugins: [
        // del({targets: 'dist/*'}),
        commonjs(),
        nodeResolve(),
        VuePlugin(),
        // postcss({
        //     extract: true,
        //     plugins: [cssnano()]
        // }),
        // css({output: 'bundle.css'}),
        // babel(),
        (process.env.NODE_ENV === 'production' && terser()),
    ],
};