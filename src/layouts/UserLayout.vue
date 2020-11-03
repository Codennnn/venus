<template>
  <main class="user-layout">
    <section class="user-layout-section">
      <div class="mb-8 flex justify-center items-center select-none">
        <img
          class="w-10"
          src="@img/logo.png"
          alt="LOGO"
        >
        <span class="ml-3 text-3xl font-bold">Venus</span>
      </div>
      <div class="user-layout-content">
        <a-tabs
          class="tabs select-none"
          default-active-key="Login"
          :active-key="activeKey"
          :animated="{tabPane:false}"
          @change="onTabChange"
        >
          <a-tab-pane
            key="Login"
            tab="登录"
          >
            <router-view name="login" />
          </a-tab-pane>
          <a-tab-pane
            force-render
            key="Register"
            tab="注册"
          >
            <router-view name="register" />
          </a-tab-pane>
        </a-tabs>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'UserLayout',

  data: () => ({
    activeKey: 'login',
  }),

  watch: {
    '$route.name': {
      handler(name) { this.activeKey = name },
      immediate: true,
    },
  },

  methods: {
    onTabChange(name) {
      this.$router.push({ name })
    },
  },
}
</script>

<style lang="scss" scoped>
.user-layout {
  @apply min-h-screen flex flex-col items-center justify-center;
  background: center no-repeat url(~@/assets/images/user_layout_bg.svg);

  &-section {
    @apply mt-4 mb-6;
  }
  &-content {
    @apply py-4 px-8 rounded-lg bg-white;
    @media screen and (max-width: 450px) {
      width: 85%;
    }
    width: 450px;

    .tabs::v-deep {
      .ant-tabs-bar {
        text-align: center;
        border: none;
        .ant-tabs-tab {
          @apply text-lg;
        }
      }
      .ant-tabs-content {
        @apply py-5;
      }
    }
  }
}
</style>
