<template>
  <div>
    <div class="section-card mb-8">
      <h3 class="section-card__title flex items-center text-xl">
        Antd Icon
        <a
          class="mt-1 ml-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antdv.com/components/icon-cn/"
        >
          <feather
            type="external-link"
            size="18"
          />
        </a>
      </h3>
      <p class="mb-6 text-gray-600">由 Ant Design Vue 组件库提供的语义化矢量图形</p>
      <ant-icon />
    </div>

    <div class="section-card mb-8">
      <h3 class="section-card__title flex items-center text-xl">
        Feather Icon
        <a
          class="mt-1 ml-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://feathericons.com/"
        >
          <feather
            type="external-link"
            size="18"
          />
        </a>
      </h3>
      <p class="mb-6 text-gray-600">简单漂亮的开源图标，注重简洁性，一致性和灵活性</p>
      <feather-icon />
    </div>

    <div class="section-card mb-8">
      <h3 class="section-card__title flex items-center text-xl">
        Icon Park
        <a
          class="mt-1 ml-2"
          target="_blank"
          rel="noopener noreferrer"
          href="http://iconpark.bytedance.com/official"
        >
          <feather
            type="external-link"
            size="18"
          />
        </a>
      </h3>
      <p class="mb-6 text-gray-600">具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标</p>
      <icon-park />
    </div>

    <div class="section-card mb-8">
      <h3 class="section-card__title text-xl">更多优秀的图标库</h3>
      <a
        class="primary"
        href="https://ionicons.com/"
        target="_blank"
        rel="noopener noreferrer"
      >Ionicons</a>
      、
      <a
        class="primary"
        href="https://boxicons.com/"
        target="_blank"
        rel="noopener noreferrer"
      >Boxicons</a>
    </div>
  </div>
</template>

<script>
import AntIcon from './components/AntIcon.vue'
import FeatherIcon from './components/FeatherIcon.vue'
import IconPark from './components/IconPark.vue'

export default {
  name: 'IconLib',

  components: {
    AntIcon,
    FeatherIcon,
    IconPark,
  },
}
</script>
