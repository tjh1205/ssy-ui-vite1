<br>
<p align="center">
<img src="./assets/logo.png" style="width:200px;" />
</p>
<h1 align="center">SSY-UI-VITE</h1>
<p align="center">
  基于 Vite 栈的前端工程化实践
</p>

<p align="center">
<img src="https://img.shields.io/github/license/tjh1205/ssy-ui-vite1?color=red">
<a href="https://codecov.io/gh/tjh1205/ssy-ui-vite1" >
 <img src="https://codecov.io/gh/tjh1205/ssy-ui-vite1/graph/badge.svg?token=AXR5E5TBEZ"/>
 </a>
</p>
## Features

- 基于Vue框架
- 支持JSX与Vue单文件组件
- `Jest + Vue3 plugins`实现单元测试
- Eslint + Prettier + Husky 语法检查
- 采用Rollup构建
- Vitepress + Vercel 文档网站搭建
- 基于Action CI 实现持续集成与交付

## Install
```bash
npm i ssy-ui-vite1
```

## Quick Start
```bash
import Vue from 'vue'
import SSYUI from 'ssy-ui'

const App = {
    template: `
        <SButton color="blue">主要按钮</SButton>
        `,
};

createApp(App)
    .use(SSYUI)
    .mount("#app");
```
