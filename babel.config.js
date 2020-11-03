const plugins = [
  // 可选链语法
  '@babel/plugin-proposal-optional-chaining',
  // 按需引入 antd vue 组件
  [
    'import',
    {
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      style: true,
    },
    'ant-design-vue',
  ],
  [
    'import',
    {
      libraryName: '@icon-park/vue',
      libraryDirectory: 'es/icons',
      camel2DashComponentName: false,
    },
    '@icon-park/vue',
  ],
]

// 生产环境下移除 console
if (process.env.NODE_ENV === 'production') {
  plugins.push(['transform-remove-console', { exclude: ['error', 'warn'] }])
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins,
}
