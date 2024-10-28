import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import Unocss from '../config/unocss'

export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    Unocss(),
  ],
  server: {
    port: 3000,
  },
})
