<template>
  <a-drawer
    class="relative"
    width="400"
    :closable="false"
    :mask="false"
    :get-container="false"
    :wrap-style="{ position: 'absolute' }"
    :visible="isTodoDrawerOpened"
  >
    <template #title>
      <div class="flex items-center">
        <div
          v-if="currTodo.title"
          class="px-6 py-2 flex items-center primary hover:text-white bg-primary-light hover:bg-primary transition rounded-md text-sm cursor-pointer"
          @click="$message.success('已完成一项任务，太棒了！')"
        >
          <feather
            class="mr-1"
            size="18"
            type="check"
          />
          设为已完成
        </div>
        <div class="ml-auto flex items-center text-gray-600">
          <feather
            class="ml-2 cursor-pointer"
            size="18"
            type="link"
          />
          <a-dropdown :trigger="['click']">
            <feather
              class="ml-2 cursor-pointer"
              size="20"
              type="more-vertical"
            />
            <template #overlay>
              <a-menu>
                <a-menu-item
                  v-for="({ text }, i) in [{text:'添加到其他项目'},{text:'复制为新任务'},{text:'丢弃该任务'}]"
                  :key="i"
                  class="text-center text-sm text-gray-700"
                  @click="$message.success(text)"
                >
                  {{ text }}
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <feather
            class="ml-2 cursor-pointer"
            size="21"
            type="x"
            @click="onCloseDrawer"
          />
        </div>
      </div>
    </template>
    <!-- 标题信息 -->
    <div class="sec">
      <h4 class="sec__title">
        标题信息
      </h4>
      <a-textarea
        v-model="currTodo.title"
        placeholder="请输入标题信息"
        :auto-size="{ minRows: 2, maxRows: 6 }"
      />
    </div>

    <!-- 日期选择 -->
    <div class="sec">
      <h4 class="sec__title">
        任务周期
      </h4>
      <a-range-picker
        v-model="currTodo.date"
        class="w-full"
      />
    </div>

    <!-- 任务标签 -->
    <div class="sec">
      <h4 class="sec__title">
        任务标签
      </h4>
      <a-select
        v-model="currTodo.tag"
        mode="tags"
        size="large"
        class="w-full text-base"
        placeholder="请选择任务标签（可选）"
      >
        <a-select-option
          v-for="({ id, label }) in [{id:'1',label:'前端开发'}, {id:'2',label:'后端开发'}, {id:'3',label:'UI 设计'}, {id:'4',label:'架构设计'}]"
          :key="id"
        >
          {{ label }}
        </a-select-option>
      </a-select>
    </div>

    <div class="absolute right-0 bottom-0 mr-3 mb-3">
      <a-button
        type="primary"
        @click="onCloseDrawer"
      >
        {{ currTodo.title ? '完成编辑' : '创建任务' }}
      </a-button>
    </div>
  </a-drawer>
</template>

<script>
import _clonedeep from 'lodash.clonedeep'

export default {
  name: 'TodoDrawer',

  data: () => ({
    currTodo: {},
  }),

  computed: {
    isTodoDrawerOpened() {
      return this.$store.state.todo.isTodoDrawerOpened
    },
  },

  watch: {
    '$store.state.todo.currEditTodo': {
      handler(val) {
        this.currTodo = _clonedeep(val)
      },
      immediate: true,
    },
  },

  methods: {
    onCloseDrawer() {
      this.$store.commit('todo/SET_TODO_DRAWER_STATUS', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.sec {
  @apply mb-6;
  &__title {
    @apply mb-1 text-gray-600;
  }
}
</style>
