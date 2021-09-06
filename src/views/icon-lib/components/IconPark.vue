<template>
  <div>
    <home class="mr-6" size="24" />
    <experiment class="mr-6" size="24" />
    <unlock class="mr-6" size="24" />
    <camera theme="multi-color" size="35" :fill="['#333', '#6485ff', '#FFF', '#43CCF8']" />
  </div>
</template>

<script>
import { Home, Experiment, Unlock, Camera } from '@icon-park/vue'
import { DEFAULT_ICON_CONFIGS } from '@icon-park/vue/es/runtime'

const IconConfig = { ...DEFAULT_ICON_CONFIGS }

export default {
  name: 'IconPark',

  provide() {
    return {
      ICON_CONFIGS: IconConfig,
    }
  },

  components: {
    Home,
    Experiment,
    Unlock,
    Camera,
  },
}
</script>
