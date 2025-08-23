// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxt/icon', 'shadcn-nuxt'],

  icon: {
    serverBundle: {
      collections: ['mdi']
    }
  },
  
  app: {
    head: {
      title: 'Frontend Mentor',
      titleTemplate: '% | Browser extensions manager UI',
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
      htmlAttrs: { lang: 'en' },

      // Links to favicons
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/favicon-32x32.png' },
      ],

    },

    pageTransition: { name: 'page', mode: 'out-in' }
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://bem-ui.vercel.app/'
    }
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
    // autoImport: true,
    // cssReset: true,
    // theme: 'dark',
    // icons: 'heroicons',
    // installPackages: true,  
  },

  vite: {
    plugins: [tailwindcss()],
  }
})