export default {
  buildModules: ["@nuxtjs/style-resources"],
  devtools: { enabled: true },

  styleResources: {
    scss: ["@/assets/scss/_variables.scss"],
  },

  css: [
    "bootstrap/dist/css/bootstrap.css",
    "@/assets/scss/app.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core'
    ],
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },

  plugins: ["@/plugins/bootstrap.client.ts"],

  runtimeConfig: {
    public: {
      baseApiUrl: process.env.NUXT_BASE_API_URL || "",
    },
  },

  compatibilityDate: "2024-07-06",
  modules: ["@nuxtjs/google-fonts", "nuxt-font-loader"],
  googleFonts: {
    families: {
      Poppins: [200, 400, 500, 600],
    },
    display: 'swap'
  },

  fontloader: {
    external: [
      {
        src: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600&display=swap',
        family: 'Poppins',
        class: 'font-poppins'
      }
    ]
  }
};