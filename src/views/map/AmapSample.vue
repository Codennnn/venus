<template>
  <div>
    <div class="section-card mb-6">
      <h3 class="section-card__title">3D 地图</h3>
      <p class="mt-6 mb-2">
        开启 3D 地图视图效果，需要引用 JSAPI v1.4.0 以上版本的JSAPI，同时在 Map 初始化的时候给地图
        viewMode:3D 属性
      </p>
      <pre v-highlightjs><code class="javascript">{{ `const map = new AMap.Map('container', {
    pitch:75, // 地图俯仰角度，有效范围 0 度- 83 度
    viewMode:'3D', // 开启3D视图，默认为关闭
})` }}</code></pre>
    </div>
    <div class="mb-16">
      <div id="map-demo-3d" class="w-full" style="height: 400px" />
    </div>

    <div class="section-card mb-6">
      <h3 class="section-card__title">武汉市车辆密度图</h3>
      <p class="mt-6 mb-2">
        开启 3D 地图视图效果，需要引用 JSAPI v1.4.0 以上版本的JSAPI，同时在 Map 初始化的时候给地图
        viewMode:3D 属性
      </p>
      <pre v-highlightjs><code class="javascript">{{ `const layer = new Loca.PointCloudLayer({
    map: this.mapDemoPoint,
    fitView: false,
})

layer.setData(csv, {
    lnglat(obj) {
        const { value } = obj
        return [value.lng, value.lat]
    },
    type: 'csv',
})

layer.setOptions({
    style: {
        opacity: 0.8,
        radius: 0.9,
        color: 'rgba(42, 167, 184, 1)',
    },
})

layer.render()` }}</code></pre>

      <p class="mt-4 mb-2">效果如下：</p>
      <div class="rounded-lg overflow-hidden">
        <div id="map-demo-point" class="w-full" style="height: 600px" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AmapSample',

  data: () => ({
    key: 'f616f5a0f4e91791da57d63a0f41ee39',
    mapDemo3D: null,
    mapDemoPoint: null,
  }),

  mounted() {
    const amap = document.createElement('script')
    document.head.appendChild(amap)
    amap.onload = async () => {
      this.loadMap3D()
      this.loadMapPoint()
    }
    amap.id = 'amap'
    amap.src = `//webapi.amap.com/maps?v=1.4.15&plugin=Map3D&key=${this.key}`
  },

  beforeDestroy() {
    if (this.mapDemo3D) {
      this.mapDemo3D.destroy()
      this.mapDemo3D = null
    }
    if (this.mapDemoPoint) {
      this.mapDemoPoint.destroy()
      this.mapDemoPoint = null
    }
    window.AMap = null
    window.Loca = null

    const scripts = document.getElementsByTagName('script')
    for (let i = 0; i < scripts.length; i += 1) {
      if (scripts[i].id === 'amap' || scripts[i].id === 'loca') {
        scripts[i].parentNode.removeChild(scripts[i])
      }
    }
  },

  methods: {
    async loadMap3D() {
      const hide = this.$message.loading('正在加载 3D 地图', 0)
      try {
        this.mapDemo3D = new AMap.Map('map-demo-3d', {
          viewMode: '3D',
          center: [113.321206, 23.119293],
          rotateEnable: true,
          pitchEnable: true,
          zoom: 17,
          zooms: [2, 20],
          pitch: 50,
          rotation: -15,
        })
        AMap.plugin(['AMap.Scale', 'AMap.ControlBar'], () => {
          // 异步同时加载多个插件
          this.mapDemo3D.addControl(
            new AMap.ControlBar({
              position: {
                right: '10px',
                top: '10px',
              },
            })
          )
          this.mapDemo3D.addControl(new AMap.Scale())
        })
        this.mapDemo3D.on('complete', () => {
          hide()
        })
      } catch (e) {
        this.$notify.error({
          duration: null,
          message: '3D 地图加载出错',
          description: e,
        })
        hide()
      }
    },

    async loadMapPoint() {
      const hide = this.$message.loading('正在加载武汉市车辆密度图', 0)
      try {
        const loca = document.createElement('script')
        document.head.appendChild(loca)
        loca.onload = async () => {
          this.mapDemoPoint = new AMap.Map('map-demo-point', {
            viewMode: '3D',
            center: [114.284702, 30.5],
            zoom: 11.5,
            features: ['bg', 'road'],
            skyColor: '#eee',
            pitch: 0,
            mapStyle: 'amap://styles/grey',
          })

          this.mapDemoPoint.on('complete', () => {
            hide()
          })

          const { data: csv } = await axios.get('https://a.amap.com/Loca/static/mock/sfcars.csv')

          const layer = new Loca.PointCloudLayer({
            map: this.mapDemoPoint,
            fitView: false,
          })

          layer.setData(csv, {
            lnglat(obj) {
              const { value } = obj
              return [value.lng, value.lat]
            },
            type: 'csv',
          })

          layer.setOptions({
            style: {
              opacity: 0.8,
              radius: 0.9,
              color: 'rgba(42, 167, 184, 1)',
            },
          })

          layer.render()
        }
        loca.src = `//webapi.amap.com/loca?v=1.3.2&key=${this.key}`
        loca.id = 'loca'
      } catch (e) {
        this.$notify.error({
          duration: null,
          message: '武汉市车辆密度图加载出错',
          description: e,
        })
        hide()
      }
    },
  },
}
</script>
