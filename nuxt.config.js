const webpack = require('webpack')

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'nuxt-handball',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    plugins: [{
        src: "~/plugins/firebase.js",
        ssr: true
    }],
    /*
     ** Build configuration
     */
    build: {
        vendor: ["firebase", "firebase-auth", "vuexfire"],
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
    },
    modules: [
        //'bootstrap-vue/nuxt',['@nuxtjs/bootstrap-vue', { css: false }]
        '@nuxtjs/bootstrap-vue',
    ],
    router: {}
}