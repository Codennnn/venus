<template>
  <feather
    type="search"
    @click="openNotification()"
  />
</template>

<script>
export default {
  name: 'HeaderSearch',

  data: () => ({
    searchContent: '',
  }),

  methods: {
    openNotification() {
      this.$notify.open({
        message: '您想了解什么？',
        description: (
          <a-input
            placeholder="输入你想搜索的关键词"
            value={this.searchContent}
            on-change={({ target: { value } }) => { this.searchContent = value }}
          />
        ),
        btn: (
          <a-button type="primary" on-click={() => { this.onSearch() }}>
            搜索
          </a-button>
        ),
        duration: null,
      })
    },

    onSearch() {
      if (this.searchContent.length > 0) {
        // TODO: 通过获取 this.searchContent 执行搜索逻辑
      }
    },
  },
}
</script>
