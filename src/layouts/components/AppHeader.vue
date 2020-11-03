<template>
  <div class="app-header">
    <div class="shortcuts">
      <a-tooltip
        v-for="({ icon, routeName, title }) in shortcuts"
        :key="icon"
        placement="bottom"
      >
        <template #title>{{ title }}</template>
        <feather
          class="mr-4 cursor-pointer"
          size="20"
          :type="icon"
          @click="onClickShortcut(routeName)"
        />
      </a-tooltip>
    </div>

    <div class="setting">
      <div class="flex items-center">
        <header-search />
        <feather
          class="mx-4"
          :type="isFullScreen ? 'minimize' : 'maximize'"
          @click="onScreenfull"
        />
        <header-notice />
      </div>

      <a-dropdown
        class="ml-4"
        :trigger="['click']"
      >
        <div class="h-full flex items-center">
          <div class="flex items-center text-base">
            <div class="mx-4 text-right">
              <div class="text-lg">{{ info.nickname || '暂无昵称' }}</div>
              <div class="text-sm">{{ info.role }}</div>
            </div>
            <div>
              <a-avatar
                class="flex items-center justify-center"
                size="large"
                :icon="info.avatar ? '' : 'user'"
                :src="info.avatar"
              />
            </div>
          </div>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item
              v-for="({ label, name, icon, click }, index) in menuItems"
              :key="index"
              @click="onClickMenuItem(name, click)"
            >
              <div
                tag="div"
                class="flex items-center justify-center text-gray-700"
              >
                <feather
                  size="16"
                  :type="icon"
                />
                <span class="ml-2">{{ label }}</span>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import HeaderSearch from './app-header/HeaderSearc.vue'
import HeaderNotice from './app-header/HeaderNotice.vue'

export default {
  name: 'AppHeader',
  components: { HeaderSearch, HeaderNotice },

  data: () => ({
    shortcuts: [
      { icon: 'monitor', routeName: 'Ecommerce', title: '仪表盘' },
      { icon: 'check-circle', routeName: 'Todo', title: '任务列表' },
      { icon: 'server', routeName: 'Kanban', title: '看板' },
    ],
    menuItems: [
      {
        label: '测试页面', name: 'Test', icon: 'github',
      },
      {
        label: '个人中心', name: 'Profile', icon: 'user',
      },
      {
        label: '待办事项', name: 'Todo', icon: 'check-square',
      },
      {
        label: '退出登录', name: 'Login', icon: 'log-out', click: 'logOut',
      },
    ],
    isFullScreen: false,
  }),

  computed: {
    info() {
      return this.$store.state.user.info
    },
  },

  mounted() {
    if (screenfull.isEnabled) {
      screenfull.on('change', () => { this.isFullScreen = screenfull.isFullscreen })
    }
  },

  methods: {
    async logOut() {
      const CAN_LOGOUT = await this.$store.dispatch('user/logout')
      if (CAN_LOGOUT) {
        this.$router.replace({ name: 'Login' })
      }
    },

    onClickShortcut(name) {
      this.$router.push({ name })
    },

    onClickMenuItem(name, click) {
      if (click) {
        this[click]()
      } else {
        this.$router.push({ name })
      }
    },

    onScreenfull() {
      if (screenfull.isEnabled) {
        screenfull.toggle()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  @apply w-full h-full flex items-center bg-transparent;
}

.setting {
  @apply h-full ml-auto flex items-center cursor-pointer;
}
</style>
