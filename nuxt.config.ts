// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-11-01',
//   devtools: { enabled: true },
//   app: {
//     head: {
//       title: 'Nuxt 網站',
//       meta: [
//         { name: 'description', content: '這是我的 Nuxt 網站' }
//       ]
//     }
//   },
//   vite: {
//     optimizeDeps: {
//       include: ['element-plus']
//     }
//   },
//   css: [
//     'element-plus/dist/index.css',
//     'bootstrap/dist/css/bootstrap.min.css' // 新增 Bootstrap 的樣式
//   ]
// })

export default defineNuxtConfig({
  ssr: false, // 關閉伺服器端渲染，啟用靜態站點生成
  app: {
    baseURL: '/nuxt-demo-web/', // 替換為你的 GitHub 儲存庫名稱，例如 '/nuxt-demo-web/'
    head: {
      title: 'Nuxt 網站',
      meta: [
        { name: 'description', content: '這是我的 Nuxt 網站' }
      ]
    }
  },
  vite: {
    optimizeDeps: {
      include: ['element-plus']
    }
  },
  css: [
    'element-plus/dist/index.css',
    'bootstrap/dist/css/bootstrap.min.css'
  ]
});
