import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
// import replace from 'rollup-plugin-replace'
// import css from 'rollup-plugin-css-only'
import embedCSS from 'rollup-plugin-embed-css'
import vue from 'rollup-plugin-vue'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd', // amd, cjs, es, iife, umd
        name: 'ui',
        globals: {
            vue: 'Vue'
        }
    },
    plugins: [
        vue(),
        resolve(),
        babel({
            exclude: ['node_modules/**']
        }),
        embedCSS(),
        commonjs(),
    ],
    external: [
        'vue',
        'element-ui'
    ]
}