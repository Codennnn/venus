const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const IS_PROD = process.env.NODE_ENV === 'production'

const assetsCDN = {
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
  },
  css: [],
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.3/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
  ],
}

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  outputDir: process.env.VUE_APP_OUTPUT_DIR,

  productionSourceMap: false,

  devServer: {
    host: '0.0.0.0',
    proxy: {
      [process.env.VUE_APP_REQUEST_BASE_URL]: {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
      },
    },
  },

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#6485ff',
            'success-color': '#57df9c',
            'warning-color': '#fdac41',
            'error-color': '#ff5b5c',
            'info-color': '#6485ff',
            'processing-color': '#6485ff',
            'text-color': '#475f7b',
            'font-size-base': '15px',
            'border-radius-base': '6px',
            'btn-border-radius-base': '4px',
            'btn-border-radius-sm': '4px',
            'font-family': '-apple-system, Rubik, \'PingFang SC\', \'Microsoft YaHei\', \'Helvetica Neue\', Helvetica, Arial, sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\'',
          },
          javascriptEnabled: true,
        },
      },
      scss: { additionalData: '@import "@/assets/scss/variables.scss";' },
      postcss: {
        plugins: [
          require('tailwindcss')('./tailwind.config.js'),
        ],
      },
    },
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@img', '@/assets/images')
      .set('@comp', '@/components')

    config
      .plugin('html')
      .tap((args) => {
        args[0].title = process.env.VUE_APP_PAGE_TITLE
        if (IS_PROD) {
          args[0].cdn = assetsCDN
        }
        return args
      })
  },

  configureWebpack: (config) => {
    config.plugins.push(
      new AntdDayjsWebpackPlugin({
        preset: 'antdv3',
      }),
    )
    config.optimization = {
      splitChunks: {
        chunks: 'all',
      },
    }

    if (IS_PROD) {
      config.plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 8192,
        }),
      )
      if (process.env.VUE_APP_MODE === 'analyze') {
        config.plugins.push(new BundleAnalyzerPlugin())
      }

      config.externals = {
        ...config.externals,
        ...assetsCDN.externals,
      }
    }
  },
}
