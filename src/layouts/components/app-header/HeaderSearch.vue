<template>
  <transition
    name="sale-down"
    mode="out-in"
  >
    <div
      v-show="show"
      class="search-wrapper"
      :class="{ 'full': isSideMenuOpened}"
    >
      <feather
        class="icon-search"
        type="search"
        size="20"
      />
      <feather
        class="icon-close"
        type="x"
        size="20"
      />
      <a-input
        ref="searchInput"
        v-model="searchContent"
        placeholder="您想了解什么？"
        @keydown.enter="searchContent.length > 0 && $message.info(`您输入了：${searchContent}`)"
        @blur="onCloseSearch"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HeaderSearch',

  data: () => ({
    show: false,
    searchContent: '',
  }),

  computed: {
    isSideMenuOpened() {
      return this.$store.state.isSideMenuOpened
    },
  },

  methods: {
    onOpenSearch() {
      this.show = true
      this.$nextTick(() => {
        this.$refs.searchInput.focus()
      })
    },

    onCloseSearch() {
      this.show = false
      this.searchContent = ''
    },

    onSearch() {
      if (this.searchContent.length > 0) {
        // TODO: 通过获取 this.searchContent 执行搜索逻辑
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.search-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: calc(100% - #{$sider-closed-width});
  height: $header-height;
  background: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.04);
  &.full {
    width: calc(100% - #{$sider-opened-width});
  }

  .icon-search,
  .icon-close {
    position: absolute;
    top: 50%;
    z-index: 101;
    transform: translateY(-50%);
  }

  .icon-search {
    left: 20px;
  }
  .icon-close {
    right: 20px;
  }

  .ant-input {
    height: 100%;
    padding: 20px 60px;
    border: none;
    &:focus {
      box-shadow: none;
    }
  }
}
</style>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter {
  transform: scale(0.97);
  opacity: 0;
}

.slide-down-leave-to {
  transform: scale(1.03);
  opacity: 0;
}
</style>
