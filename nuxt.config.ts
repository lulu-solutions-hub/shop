// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  devtools: { enabled: true },

  plugins: [
    '~/plugins/directives',
  ],

  site: {
    url: "https://lulu-constructor-shop.netlify.app/"
  },

  sitemap: {
    urls: [
      {
        loc: "/0",
        lastmod: new Date(),
        priority: 0.7,
        changefreq: 'daily'
      },
      {
        loc: "/",
        lastmod: new Date(),
        priority: 0.1,
        changefreq: 'daily'
      },
      {
        loc: "/thanks",
        lastmod: new Date(),
        priority: 0.1,
        changefreq: 'daily'
      },
    ]
  },

  robots: {
    Sitemap: `https://lulu-constructor-shop.netlify.app/sitemap.xml`,
  },

  app: {
    head: {
      title: 'Lulu Constructor',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1,viewport-fit=true'
        },
      ],
    },
  },

  css: [
    "@/assets/main.css",
    "@/assets/main.scss",
    '@mdi/font/css/materialdesignicons.min.css',
    'vuetify/lib/styles/main.sass',
    "@/assets/app.scss",
  ],

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-anchorscroll',
    '@pinia/nuxt',
    'nuxt-icon',
    'nuxt-gtag',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  gtag: {
    // Your primary Google tag ID
    id: 'G-SJQDFDXS5Q',
    // Additional configuration for this tag ID
    config: {
      page_title: 'LuLu Constructor'
    },
  },

  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/colors.scss" as *;'
        }
      }
    },
  },
  devServer: {
    host: 'localhost',
    port: 3000
  },

  nitro: {
    compressPublicAssets: true,
    output: {
      publicDir: path.join(__dirname, 'dist')
    },
  },
  ssr: true,

  runtimeConfig: {
    public: {
      telegramSecretApi: '6846175338:AAEyv8r6hjgJQkNRuiqCvaOui_EI-jbLXiw',
      chatId: '-1002026815522',
      topicId: '30'
    }
  }
})
