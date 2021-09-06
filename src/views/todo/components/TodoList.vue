<template>
  <div class="relative">
    <div>
      <a-input
        class="search-input"
        size="large"
        :placeholder="searchInputText"
        @focus="searchInputText = '请输入任务关键字...'"
        @blur="searchInputText = '搜索任务...'"
      >
        <template #prefix>
          <feather size="20" type="search" />
        </template>
      </a-input>
    </div>

    <perfect-scrollbar
      class="todo-list"
      :options="{
        maxScrollbarLength: 160,
        wheelSpeed: 0.6,
      }"
    >
      <flip-list v-if="filterItems.length > 0" style="min-width: 800px">
        <li
          v-for="todo in filterItems"
          :key="todo.id"
          class="todo-list__item"
          :class="{ 'todo-list__item-active': todo.id === currEditItem.id }"
          @click="onOpenDrawer(todo)"
        >
          <a-checkbox v-model="todo.done" class="mr-4" @click.stop />
          <div class="flex-1 truncate">
            {{ todo.title }}
          </div>
          <div class="ml-auto flex items-center flex-wrap">
            <div class="flex-1 flex items-center select-none">
              <div
                v-for="it in todo.tag"
                :key="it"
                class="ml-2 px-2 py-1 rounded-lg text-sm"
                :class="[tags[it].color, `bg-${tags[it].color}-light`]"
              >
                {{ tags[it].text }}
              </div>
            </div>
            <feather
              class="ml-2 transition"
              size="20"
              type="star"
              :class="todo.star ? 'warning' : 'text-gray-500'"
              @click.stop="todo.star = !todo.star"
            />
          </div>
        </li>
      </flip-list>
      <a-empty v-else class="h-full flex flex-col justify-center items-center" />
    </perfect-scrollbar>
  </div>
</template>

<script>
import FlipList from '@/components/animation/FlipList.vue'

export default {
  name: 'TodoList',

  components: { FlipList },

  data: () => ({
    searchInputText: '搜索任务...',
    tags: {
      1: { text: '前端开发', color: 'primary' },
      2: { text: '后端开发', color: 'success' },
      3: { text: 'UI 设计', color: 'warning' },
      4: { text: '架构设计', color: 'danger' },
    },
  }),

  computed: {
    filterItems() {
      return this.$store.getters['todo/filterItems']
    },

    currEditItem() {
      return this.$store.state.todo.currEditTodo
    },

    isDrawerOpened() {
      return this.$store.state.todo.isTodoDrawerOpened
    },
  },

  methods: {
    onOpenDrawer(todoItem) {
      if (todoItem.id !== this.currEditItem.id) {
        this.$store.commit('todo/SET_CURR_EDIT_TODO', todoItem)
        this.$store.commit('todo/SET_TODO_DRAWER_STATUS', true)
      } else {
        this.$store.commit('todo/SET_TODO_DRAWER_STATUS', !this.isDrawerOpened)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.search-input::v-deep {
  @apply py-1;
  .ant-input {
    @apply h-12 pl-10 shadow-none border-none;
    &::placeholder {
      @apply text-sm;
    }
    &:focus {
      box-shadow: 0 10px 15px -5px rgba($secondary, 0.1);
    }
  }
}

.todo-list {
  @apply h-full overflow-hidden;

  height: calc(100% - 58px);
  &__item {
    @apply px-6 py-5 flex items-center cursor-pointer;

    transition: $transition;
    &:hover {
      box-shadow: 0 15px 30px -5px rgba($secondary, 0.1);
      transform: translateY(-3px);
    }
  }
  &__item-active {
    background: rgba($primary, 0.05);
  }
}
</style>
