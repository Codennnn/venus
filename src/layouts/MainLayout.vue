<template>
  <main class="main-layout">
    <!-- 侧边栏 -->
    <aside
      class="the-aside"
      :class="menuStatusClass"
    >
      <app-sider />
    </aside>

    <section
      class="the-section"
      :class="menuStatusClass"
    >
      <!-- 顶部导航 -->
      <header
        class="the-header"
        :class="[menuStatusClass, { 'fixed-top': isHeaderFixed }]"
      >
        <app-header />
      </header>

      <!-- 内容区域 -->
      <main class="the-main">
        <Breadcrumb class="mb-4" />

        <transition
          name="sale-fade"
          mode="out-in"
        >
          <keep-alive
            :include="alivePages"
            :max="5"
          >
            <router-view />
          </keep-alive>
        </transition>
      </main>

      <!-- 页脚 -->
      <footer class="the-footer">
        <app-footer />
      </footer>
    </section>
  </main>
</template>

<script>
import _debounce from 'lodash.debounce'

import Breadcrumb from '@comp/Breadcrumb.vue'
import AppHeader from './components/AppHeader.vue'
import AppSider from './components/AppSider.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppSider,
    AppFooter,
    Breadcrumb,
  },

  data: () => ({
    alivePages: [], // 允许缓存的路由
  }),

  computed: {
    isHeaderFixed() {
      return this.$store.state.isHeaderFixed
    },
    isSideMenuOpened() {
      return this.$store.state.isSideMenuOpened
    },
    menuStatusClass() {
      return this.isSideMenuOpened ? 'menu-open' : 'menu-close'
    },
  },

  mounted() {
    // 观察网页宽度，设置侧边栏菜单是否展开
    window.onresize = _debounce(() => {
      const CAN_MENU_OPEN = !!(document.body.clientWidth >= 1300)
      this.$store.commit('SET_SIDE_MENU_STATUS', CAN_MENU_OPEN)
    }, 400)

    // 观察滚动距离，调整顶部导航栏背景色
    window.onscroll = _debounce(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      if (scrollTop > 10) {
        this.$store.commit('SET_HEADER_STATUS', true)
      } else {
        this.$store.commit('SET_HEADER_STATUS', false)
      }
    }, 250)
  },
}
</script>

<style lang="scss" scoped>
.main-layout {
  @apply relative min-h-screen;
  min-width: $layout-min-width;
}

$main-open-margin-left: pxTorem($sider-opened-width) + $section-gap;
$main-close-margin-left: pxTorem($sider-closed-width) + $section-gap;

.the-aside {
  @apply fixed top-0 left-0 h-full;
  z-index: 999;
  width: $sider-opened-width;
  border-right: 1px solid #dfe3e7;
  transition: $transition;
  &.menu-close {
    width: $sider-closed-width !important;
  }
}

.the-section {
  @apply relative h-full flex flex-col;
  margin-left: $main-open-margin-left;
  padding-top: pxTorem($header-height) + $section-gap;
  padding-right: $section-gap;
  transition: $transition;
  &.menu-close {
    margin-left: $main-close-margin-left;
  }
}

.the-header {
  @apply fixed top-0 right-0 flex items-center;
  z-index: 999;
  width: calc(100% - #{$sider-opened-width});
  height: $header-height;
  padding: 0 $section-gap;
  transition: $transition;
  &.menu-close {
    width: calc(100% - #{$sider-closed-width});
  }
  &.fixed-top {
    background: #fff;
    box-shadow: $header-shadow;
  }
}

.the-main {
  @apply h-full min-w-full;
  min-height: calc(
    100vh - #{$header-height} - #{$footer-height} - 2 * #{$section-gap}
  );
}

.the-footer {
  @apply mt-auto w-full;
  padding-top: $section-gap;
}
</style>
