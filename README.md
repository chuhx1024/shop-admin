# Vue 3 + Typescript + Vite


### 关于eslint 
- 修复 : eslint 后的匹配要加上 引号
```
"lint": "eslint './src/**/*.{js,jsx,vue,ts,tsx}' --fix",   
```
- 修改 .eslintrc.js
```js
module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'plugin:vue/vue3-strongly-recommended',  // Vue 3 的规则 node_modules/eslint-plugin-vue/lib/configs/vue3-strongly-recommended.js
        'standard',
    ],
```
### eslint 和 Vs Code 集成
- 禁用 vetur
- 安装 ESlint 插件
- 安装 Volar
- 配置
```js
.vscode.settings.json
```

### 配置  git commit hook

- 使用 staged 插件
- 地址 https://www.npmjs.com/package/lint-staged
- 使用
```sh
npx mrm@2 lint-staged
```
- 主要安装 
    - husky 作用是 拦截 git 提交
    - lint-staged  作用是 拿到待提交的代码
- 配置
```json
// package.json
{
    ...
    "lint-staged": {
        "*.{html,vue,css,sass,scss,less}": [
          "npm run lint:css"
        ]
    }，
    "gitHooks": {
        "pre-commit": "lint-staged"
    }
}

```
- 没有必要 不使用 

### 安装插件 eslint 不通过  编译报错

- 安装
``sh
yarn add vue-eslint-plugin -D
```

- 配置
```js
//vite.config.ts
export default defineConfig({
    plugins: [
        vue(),
        eslintPlugin({}),
    ],
})
``
- 修改 .eslintrc.js
```js
module.exports = {
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  }
}
````









## 笔记

https://www.yuque.com/books/share/84a225ba-970e-46ee-9e72-b09a297d75fe?#（密码：slzd） 《【Vue 3 + TS 项目实战】统】

## 代码

https://gitee.com/lipengzhou/shop-admin

