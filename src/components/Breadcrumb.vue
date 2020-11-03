<template>
  <a-breadcrumb v-if="breadcrumbList.length > 0">
    <a-breadcrumb-item
      v-for="({ title }, i) in breadcrumbList"
      :key="i"
    >{{ title }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',

  data: () => ({
  }),

  computed: {
    breadcrumbList() {
      if (this.$route.meta.breadcrumb) {
        return this.$route.meta.breadcrumb.map((item) => {
          if (typeof item === 'string') {
            return { title: item }
          } if (item.path) {
            return item
          }
          return {}
        })
      }
      return []

      // return this.$route.matched.map(({ meta: { title } }) => ({ title }))
    },
  },
}
</script>
