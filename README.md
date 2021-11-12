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
```

### 项目 Git commit 规范
```
build:	对构建系统或者外部依赖项进行了修改。
ci:	对 CI 配置文件或脚本进行了修改。
perf:	优化相关，比如提升性能、体验。
revert:	回滚到上一个版本。
feat：新功能（feature）
fix：修补bug
docs：新增或修改文档。
style： 不影响代码含义的修改，比如空格、格式化、缺失的分号等，注意不是 css 修改
refactor：重构（即不是新增功能，也不是修改bug的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
```
（1）使用第一人称现在时，比如使用change而不是changed或changes。

（2）应该说明代码变动的动机，以及与以前行为的对比。

- 相关工具：
    - commitlint：验证 git commit 日志是否符合规范 (https://github.com/conventional-changelog/commitlint)
    - Commitizen：辅助编写符合 git commit 规范的工具


### Vite 项目中的TS环境说明
- https://vitejs.cn/guide/why.html
- vite 原生支持 ts  但是不会做ts 的校验
- 执行 yarn build 时才会校验  "build": "vue-tsc --noEmit && vite build",  vue-tsc 就是校验的


### 如何编写 组件
- <script lang="ts">
- 








































## 笔记

https://www.yuque.com/books/share/84a225ba-970e-46ee-9e72-b09a297d75fe?#（密码：slzd） 《【Vue 3 + TS 项目实战】统】

## 代码

https://gitee.com/lipengzhou/shop-admin