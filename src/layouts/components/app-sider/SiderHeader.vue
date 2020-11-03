<template>
  <div>
    <img
      class="w-8 transition cursor-pointer"
      src="@img/logo.png"
      alt="LOGO"
    >
    <span
      v-show="isSideMenuOpened"
      class="ml-4 primary text-2xl font-bold cursor-default select-none"
    >Venus</span>

    <div
      class="circle-area"
      :class="{ 'menu-close': !isSideMenuOpened }"
    >
      <div
        class="circle"
        :title="isSideMenuOpened ? '收起侧边栏' : '展开侧边栏'"
        @click="setSideMenuStatus"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiderHeader',

  props: {
    isSideMenuOpened: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    setSideMenuStatus() {
      this.$store.commit('SET_SIDE_MENU_STATUS', !this.isSideMenuOpened)
    },
  },
}
</script>
