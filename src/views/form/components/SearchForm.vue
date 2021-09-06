<template>
  <div id="components-form-demo-advanced-search">
    <a-form
      layout="inline"
      :form="form"
      @submit="handleSearch"
    >
      <div class="flex flex-wrap">
        <div
          v-for="i in 10"
          :key="i"
          class="search-item"
          :style="{ display: i < count ? 'block' : 'none' }"
        >
          <a-form-item :label="`字段 ${i}`">
            <a-input
              v-decorator="[
                `field-${i}`,
              ]"
              :placeholder="`field-${i}`"
            />
          </a-form-item>
        </div>
      </div>

      <div class="flex items-center justify-end">
        <div
          class="mr-4 flex items-center cursor-pointer"
          @click="toggle"
        >
          {{ expand ? '收起' : '展开' }}
          <feather
            class="ml-1"
            size="16"
            :type="expand ? 'chevron-up' : 'chevron-down'"
          />
        </div>
        <a-button
          class="mr-4"
          @click="handleReset"
        >
          重置
        </a-button>
        <a-button
          type="primary"
          html-type="submit"
        >
          搜索
        </a-button>
      </div>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'advanced_search' }),
      expand: false,
    }
  },
  computed: {
    count() {
      return this.expand ? 11 : 7
    },
  },

  methods: {
    handleSearch(e) {
      e.preventDefault()
      this.form.validateFields((error, values) => {
        console.log('error', error)
        console.log('Received values of form: ', values)
      })
    },

    handleReset() {
      this.form.resetFields()
    },

    toggle() {
      this.expand = !this.expand
    },
  },
}
</script>

<style lang="scss" scoped>
.search-item {
  @apply mb-2 text-center;
  @media (min-width: 1024px) {
    @apply w-1/3;
  }
  @media (min-width: 1280px) {
    @apply w-1/4;
  }
}
</style>
