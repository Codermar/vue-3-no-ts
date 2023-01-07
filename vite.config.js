import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        // 'src/composables/core/**',
        // 'src/composables/collections',
        // 'src/store',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/components.d.ts',
      // resolvers for custom components
      // resolvers: [
      //   IconsResolver({
      //     prefix: false,
      //     alias: {
      //       sy: 'symbol',
      //       // icon: 'symbol',
      //     },
      //     customCollections: ['symbol', 'custom', 'icon'],
      //   }),
      // ],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss({
      shortcuts: [
        { 'border-dotted-base': 'border-dotted border-width-1px' },
        ['bdb', ' border-blue-400 border-dotted-base'],
        ['bdf', ' border-fuchsia-400 border-dotted-base'],
        ['bdg', ' border-green-400 border-dotted-base'],
        ['bdr', ' border-red-400 border-dotted-base'],
        ['bdw', ' border-white-400 border-dotted-base'],
        ['bdo', ' border-orange-300 border-dotted-base'],
        ['bdt', ' border-width-2px'],
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
