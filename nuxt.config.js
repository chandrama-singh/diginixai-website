export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'emizclone',
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
        '~/assets/css/styles.css',
        '~/assets/css/responsive.css',
        '~/assets/css/swiper.min.css',
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/aos.css',
        '~/assets/css/cf.errors.css',
        '~/assets/css/font-awesome.min.css',
        '~/assets/css/owl.carousel.min.css',
        '~/assets/css/styles__ltr.css',
    ],


    script: [
        { src: '~/assests/js/725944611.js' },
        { src: '~/assests/js/analytics.js' },
        { src: '~/assests/js/aos.js' },
        { src: '~/assests/js/api.js' },
        { src: '~/assests/js/bundle.js' },
        { src: '~/assests/js/bootstrap.min.js' },
        { src: '~/assests/js/conversion_async.js' },
        { src: '~/assests/js/counterup.min.js' },
        { src: '~/assests/js/fbevents.js' },
        { src: '~/assests/js/gtm.js' },
        { src: '~/assests/js/hcaptcha.js' },
        { src: '~/assests/js/hcaptcha-challenge.js' },
        { src: '~/assests/js/hcaptcha-checkbox.js' },
        { src: '~/assests/js/isotope.min.js' },
        { src: '~/assests/js/jquery.ihavecookies.js' },
        { src: '~/assests/js/jquery.min.js' },
        { src: '~/assests/js/owl.carousel.min.js' },
        { src: '~/assests/js/packery.min.js' },
        { src: '~/assests/js/popper.min.js' },
        { src: '~/assests/js/recaptcha__en.js' },
        { src: '~/assests/js/scripts.js' },
        { src: '~/assests/js/snippet.js' },
        { src: '~/assests/js/swiper.min.js' },
        { src: '~/assests/js/waypoints.min.js' },
        { src: '~/assests/js/v1.js' },
    ],



    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/firebase',
        { src: '~/plugins/owlcarausel.js', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            '~/components',
        ]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}