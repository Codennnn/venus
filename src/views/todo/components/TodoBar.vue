<template>
  <div>
    <div class="px-6 py-6">
      <a-button
        class="w-full flex justify-center items-center"
        size="large"
        type="primary"
        @click="onOpenDrawer"
      >
        <feather
          class="mr-1"
          size="20"
          type="plus"
        />
        创建任务
      </a-button>
    </div>

    <perfect-scrollbar
      style="height: calc(100% - 88px);"
      class="select-none overflow-hidden"
      :options="{
        suppressScrollX: true,
        maxScrollbarLength: 160,
        wheelSpeed: 0.60,
      }"
    >
      <a-menu
        mode="inline"
        class="todo-bar-menu"
        :selected-keys="selectedKeys"
        @click="onClickMenuItem"
      >
        <a-menu-item
          disabled
          class="m-0 bg-white cursor-default"
        >
          查看任务
        </a-menu-item>
        <a-menu-item
          v-for="({ id, label, icon }) in filters"
          :key="id"
        >
          <div class="flex items-center">
            <feather
              size="20"
              class="side-menu-icon anticon"
              :type="icon"
            />
            <span style="margin-top: 1px;">{{ label }}</span>
          </div>
        </a-menu-item>
        <a-menu-item
          disabled
          class="mt-6 mb-0 bg-white cursor-default"
        >
          任务标签
        </a-menu-item>
        <a-menu-item
          v-for="({ id, label, color }) in tags"
          :key="id"
        >
          <div class="flex justify-between items-center">
            <span style="margin-top: 1px;">{{ label }}</span>
            <div
              class="w-2 h-2 mr-2 rounded-full"
              :class="`bg-${color}`"
            />
          </div>
        </a-menu-item>
      </a-menu>
    </perfect-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'TodoBar',

  data: () => ({
    filters: [
      { id: '1', label: '所有任务', icon: 'menu' },
      { id: '2', label: '已完成', icon: 'check' },
      { id: '3', label: '已加星标', icon: 'star' },
      { id: '4', label: '回收站', icon: 'trash' },
    ],
    tags: [
      { id: '5', label: '前端开发', color: 'primary' },
      { id: '6', label: '后端开发', color: 'success' },
      { id: '7', label: 'UI 设计', color: 'warning' },
      { id: '8', label: '架构设计', color: 'danger' },
    ],
  }),

  computed: {
    selectedKeys() {
      return this.$store.state.todo.barKey
    },
  },

  methods: {
    onOpenDrawer() {
      this.$store.commit('todo/SET_TODO_DRAWER_STATUS', true)
    },

    onClickMenuItem({ key }) {
      this.$store.commit('todo/SET_TODO_BAR_KEY', key)
    },
  },
}
</script>

<style lang="scss" scoped>
.todo-bar-menu {
  border: none;
}
</style>
