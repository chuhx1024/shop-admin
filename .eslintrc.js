module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'plugin:vue/vue3-strongly-recommended',
        'standard',
    ],
    'parserOptions': {
        'ecmaVersion': 13,
        'parser': '@typescript-eslint/parser',
        'sourceType': 'module',
    },
    'plugins': [
        'vue',
        '@typescript-eslint',
    ],
    'rules': {
        indent: [2, 4], // js 4个空格缩进
        'vue/html-indent': [2, 4], // html 4个空格缩进
        eqeqeq: 0, // 允许使用 == !=
        'comma-dangle': [2, 'always-multiline'], // 对象 数据 分行显示的 结尾必须加 ','
        'quote-props': 0,
        'vue/multi-word-component-names': [2, { 'ignores': ['index'] }], // 除了 index 其他组件 文件名都是双词
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
    },
    overrides: [
        {
            files: ['src/api/**/*.ts'],
            rules: {
                camelcase: 'off',
            },
        },
    ],
}
