<template>
  <div class="app-footer">
    <span>
      <a
        target="_blank"
        rel="noopener noreferrer"
        :href="projectUrl"
      >👉🏻 View In Github</a>
    </span>
    <span>更多详情请查阅
      <a
        class="primary"
        target="_blank"
        rel="noopener noreferrer"
        :href="docUrl"
      >在线文档</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',

  data: () => ({
    projectUrl: process.env.VUE_APP_PROJECT_URL,
    docUrl: process.env.VUE_APP_PROJECT_URL,
  }),
}
</script>

<style lang="scss" scoped>
.app-footer {
  @apply flex justify-between items-center text-gray-500;
  height: $footer-height;
}
</style>
