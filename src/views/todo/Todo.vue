<template>
  <div class="todo-app">
    <div class="left">
      <todo-bar class="h-full" />
    </div>
    <div class="right">
      <todo-list class="h-full" />
    </div>
    <todo-drawer />
  </div>
</template>

<script>
import TodoBar from './components/TodoBar.vue'
import TodoList from './components/TodoList.vue'
import TodoDrawer from './components/TodoDrawer.vue'

export default {
  name: 'Todo',

  components: { TodoBar, TodoList, TodoDrawer },
}
</script>

<style lang="scss" scoped>
.todo-app {
  @apply relative w-full flex bg-white rounded-lg overflow-hidden;
  height: $full-height;
  min-height: 500px;

  .left {
    width: 22%;
    min-width: 200px;
    height: 100%;
    border-right: 1px solid #eee;
  }

  .right {
    @apply h-full;
    width: 78%;
  }
}
</style>
