<template>
  <div>
    <div class="section-card mb-6">
      <h3 class="section-card__title">
        初始化地图
      </h3>
      <p class="mt-6 mb-2">
        1. 安装 JSAPI Loader 依赖
      </p>
      <pre v-highlightjs><code class="shell">{{ `npm i @amap/amap-jsapi-loader --save` }}</code></pre>
      <p class="mt-6 mb-2">
        2. 在 mounted 生命周期函数中或之后进行初始化
      </p>
      <pre v-highlightjs><code class="javascript">{{ `import AMapLoader from '@amap/amap-jsapi-loader'

AMapLoader.load({
    "key": "您申请的key值", // 申请好的Web端开发者Key，首次调用 load 时必填
    "version": "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    "plugins": [], //插件列表
}).then((AMap) => {
    map = new AMap.Map('container');
}).catch(e => {
    console.log(e);
})` }}</code></pre>
    </div>

    <div class="section-card">
      <h3 class="section-card__title">
        自定义地图样式
      </h3>
      <p>您可以使用官方提供的地图样式，对底图进行设置，可选的样式有：normal/marcaron/graffiti/whitesmoke/dark/fresh/darkblue/blue/light/grey</p>
      <pre v-highlightjs>
        <code class="javascript">{{ `const map = new AMap.Map('container', {
    mapStyle: 'amap://styles/whitesmoke', // 设置地图的显示样式
})` }}</code>
      </pre>
      <div class="-m-2 flex flex-wrap">
        <div
          v-for="(name, i) in ['标准（normal）', '远山黛（whitesmoke）', '幻影黑（dark）', '雅士灰（grey）']"
          :key="i"
          class="w-1/2 p-4 text-center"
        >
          <div
            :id="`map-demo-${i}`"
            class="map-demo-style"
          />
          <p class="mt-2 text-xl">
            {{ name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'

export default {
  name: 'Amap',

  data: () => ({
    key: 'f616f5a0f4e91791da57d63a0f41ee39',
    mapDemos: null,
  }),

  mounted() {
    this.mapLoad()
  },

  beforeDestroy() {
    this.mapDemos?.forEach((map) => {
      if (map) {
        map.destroy()
      }
    })
    window.AMap = null
    this.mapDemos = null
  },

  methods: {
    async mapLoad() {
      try {
        const AMap = await AMapLoader.load({
          key: this.key,
          version: '2.0',
        })
        this.mapDemos = ['normal', 'whitesmoke', 'dark', 'grey'].map((styleName, i) => new AMap.Map(`map-demo-${i}`, {
          zoom: 17,
          center: [113.495497, 23.451012],
          mapStyle: `amap://styles/${styleName}`,
        }))
      } catch (e) {
        this.$notify.error({
          duration: null,
          message: '地图加载出错，请尝试刷新页面',
          description: e,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.sec {
  @apply p-6 bg-white rounded-lg;
  &__title {
    @apply text-2xl font-bold;
  }
}

.map-demo-style {
  @apply w-full;
  height: 300px;
}
</style>
