<template>
  <div class="app-sider">
    <SiderHeader class="app-sider-header" :is-side-menu-opened="isSideMenuOpened" />

    <perfect-scrollbar
      v-if="routes.length > 0"
      class="menu-scroll-wrapper"
      :options="{
        suppressScrollX: true,
        maxScrollbarLength: 160,
        wheelSpeed: 0.6,
      }"
    >
      <a-menu
        mode="inline"
        class="app-sider-menu"
        :class="{ 'is-opened': isSideMenuOpened }"
        :inline-collapsed="!isSideMenuOpened"
        :selected-keys="selectedKeys"
        :open-keys="openKeys"
        @openChange="onOpenChange"
      >
        <template v-for="routeItem in routes">
          <template v-if="!routeItem.hidden">
            <!-- 单个菜单项 -->
            <a-menu-item
              v-if="routeItem.children && routeItem.single"
              :key="routeItem.children[0].name"
              :disabled="routeItem.children[0].disabled"
              @click="!routeItem.children[0].disabled && routeTo(routeItem.children[0].path)"
            >
              <div class="flex items-center">
                <feather
                  size="22"
                  class="side-menu-icon anticon"
                  :type="routeItem.children[0].meta.icon"
                />
                <span>{{ routeItem.children[0].meta.title }}</span>
              </div>
            </a-menu-item>

            <!-- 嵌套子菜单 -->
            <sub-menu
              v-else-if="routeItem.children && !routeItem.single"
              :key="routeItem.path"
              :menu-info="routeItem"
              :route-to="routeTo"
            />
          </template>
        </template>
      </a-menu>
    </perfect-scrollbar>

    <SiderFooter class="app-sider-footer" :is-side-menu-opened="isSideMenuOpened" />
  </div>
</template>

<script>
import { isValidUrl } from '@/utils/util'
import SiderHeader from './app-sider/SiderHeader.vue'
import SiderFooter from './app-sider/SiderFooter.vue'
import SubMenu from './app-sider/SubMenu.vue'

export default {
  name: 'AppSider',

  components: {
    SiderHeader,
    SiderFooter,
    SubMenu,
  },

  data: () => ({
    selectedKeys: [],
    openKeys: [], // 默认展开第一个嵌套菜单
  }),

  computed: {
    routes() {
      return this.$store.state.auth.routes
    },

    isSideMenuOpened() {
      return this.$store.state.isSideMenuOpened
    },
  },

  watch: {
    $route: {
      handler({ name, meta }) {
        if (meta?.openKey) {
          this.openKeys = [meta.openKey]
        }
        this.selectedKeys = [name]
      },
      immediate: true,
    },
  },

  methods: {
    onOpenChange(openKeys) {
      this.openKeys = openKeys
    },

    routeTo(path) {
      if (path) {
        if (isValidUrl(path)) {
          window.open(path, '_blank', 'noopener')
        } else {
          this.$router.push(path)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-scroll-wrapper {
  height: $sider-menu-height;
  overflow: hidden;
}

.app-sider-menu::v-deep {
  @apply border-none text-gray-800 bg-transparent select-none;
  &.is-opened {
    width: $sider-opened-width;
    .ant-menu-item-group-list .ant-menu-item {
      padding-left: 32px !important;
    }
  }

  .side-menu-icon {
    min-width: 24px;
    font-size: $side-menu-icon-size;
  }
  .side-submenu-icon {
    font-size: $side-submenu-icon-size;
  }

  .ant-menu {
    @apply bg-transparent;
    &:not(.ant-menu-horizontal) .ant-menu-item-selected {
      color: $primary;
      background-color: $primary-light;
    }
  }

  &.ant-menu .ant-menu-item-selected {
    background-color: $primary-light;
  }

  .ant-menu-item {
    &::after {
      border-right: 5px solid $primary;
      border-radius: 1rem 0 0 1rem;
    }
  }

  .ant-menu-item,
  .ant-menu-submenu {
    margin-bottom: 15px !important;

    &:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected) {
      color: $secondary;
    }

    & .ant-menu-submenu-title {
      @apply text-base;
    }
  }

  &.ant-menu-inline-collapsed {
    > .ant-menu-item {
      padding: $sider-closed-padding !important;
    }

    .ant-menu-submenu .ant-menu-submenu-title {
      padding: $sider-closed-padding !important;
    }
  }
}
</style>
<style lang="scss">
.app-sider {
  @apply w-full;
  &-header {
    @apply relative flex items-center overflow-hidden;

    height: $sider-header-height;
    padding: 0 23px;

    .circle-area {
      @apply relative ml-auto;

      transition: $transition;
      &.menu-close {
        @apply absolute z-50 left-0 w-full h-full ml-0 flex items-center justify-center opacity-0;

        background: $app-bg;
        &:hover {
          opacity: 1;
        }
      }
      .circle {
        @apply relative w-5 h-5 rounded-full;

        border: 2px solid $primary;
        cursor: pointer;
        &::after {
          top: 50%;
          left: 50%;
          border: 2px solid $primary;
          transform: translate(-50%, -50%);
          content: '';
          @apply absolute w-2 h-2 rounded-full;
        }
      }
    }
  }

  &-footer {
    height: $sider-footer-height;
  }
}

// 清除菜单组标题间距
.app-sider-menu .ant-menu-item-group-title,
.sub-menu .ant-menu-item-group-title {
  padding: 0 !important;
}
</style>
