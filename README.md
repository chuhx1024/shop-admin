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
