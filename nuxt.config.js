export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Publimovil Page',
        htmlAttrs: {
            lang: 'es'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/vee-validate.js"
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        baseURL: "https://prize.manager.orangesoftco.com/",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: ["vee-validate/dist/rules"],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) { }
    }
}
