<template>
  <div class="flex items-center justify-center">
    <div class="relative w-2/3 h-10">
      <div
        class="task"
        :class="[isTaskOpen ? 'is-opened' : 'is-closed']"
        @click="isTaskOpen = true"
      >
        <div
          class="w-full flex items-center justify-center"
          :class="isTaskOpen ? 'h-12' : 'h-10'"
        >
          <feather
            class="mx-3"
            size="21"
            type="layers"
          />
          <div v-show="isSideMenuOpened || isTaskOpen">我的任务</div>
          <div
            v-show="isTaskOpen"
            class="ml-auto mr-4 w-8 h-8 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
            @click.stop="isTaskOpen = false"
          >
            <feather
              type="chevron-down"
              size="20"
            />
          </div>
        </div>

        <div
          v-show="isTaskOpen"
          class="p-5"
        >
          <div class="flex items-center">
            <h2 class="text-lg font-bold text-gray-600">今日任务</h2>
            <div class="ml-2 p-1 flex justify-center items-center primary bg-primary-light rounded cursor-pointer">
              <feather
                type="plus"
                size="16"
              />
            </div>
          </div>
          <perfect-scrollbar
            tag="ul"
            style="height: 313px;"
            class="overflow-hidden"
            :options="{
                suppressScrollX: true,
                maxScrollbarLength: 160,
                wheelSpeed: 0.60,
              }"
          >
            <li
              class="py-3 flex items-center"
              v-for="({ title, sub }) in [
                  { title: '琵琶行', sub: '浔阳江头夜送客，枫叶荻花秋瑟瑟' },
                  { title: '是唐朝诗人白居易', sub: '主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。' },
                  { title: '的长篇乐府诗之一', sub: '忽闻水上琵琶声，主人忘归客不发' },
                  { title: '作于元和十一年', sub: '寻声暗问弹者谁？琵琶声停欲语迟。' },
                  { title: '千呼万唤始出来', sub: '犹抱琵琶半遮面' },
                ]"
              :key="title"
            >
              <div class="w-8 h-10 mr-2 flex justify-center items-center rounded-full">
                <a-checkbox />
              </div>
              <div class="flex-1 overflow-hidden">
                <div>{{ title }}</div>
                <div class="truncate">{{ sub }}</div>
              </div>
              <div class="ml-auto text-lg text-gray-600 font-bold">

              </div>
            </li>
          </perfect-scrollbar>
        </div>

        <!-- 进度条 -->
        <div v-show="isTaskOpen">
          <div class="progress-grid">
            <div
              class="progress-item text-sm"
              v-for="({ label, color, percent }, i) in progress"
              :key="i"
              :title="`占比：${percent}%`"
            >
              <div>{{ label }}</div>
              <a-progress
                class="mt-0"
                :stroke-color="color"
                :percent="percent"
              />
            </div>
          </div>
        </div>

        <div
          v-show="isTaskOpen"
          class="view-all-btn"
          style="bottom: 10px; right: 10px;"
        >
          <div
            class="flex items-center text-gray"
            @click.stop="viewAll()"
          >
            <span class="mr-1 text-sm">查看全部</span>
            <feather
              size="16"
              type="chevron-right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiderFooter',

  props: {
    isSideMenuOpened: {
      type: Boolean,
      required: true,
    },
  },

  data: () => ({
    isTaskOpen: false,
  }),

  computed: {
    progress() {
      return [
        { label: '前端', color: 'rgb(100, 133, 255)', percent: 80 },
        { label: '后端', color: 'rgb(87, 223, 156)', percent: 60 },
        { label: '其它', color: 'rgb(253, 172, 65)', percent: 40 },
        { label: 'BUG', color: 'rgb(255, 91, 92)', percent: 20 },
      ]
    },
  },

  methods: {
    viewAll() {
      this.$router.push({ name: 'Todo' })
      this.isTaskOpen = false
    },
  },
}
</script>

<style lang="scss" scoped>
.task {
  @apply absolute bottom-0 left-0 w-full h-full rounded-lg whitespace-no-wrap overflow-hidden;
  transition: $transition;
  &.is-closed {
    @apply flex items-center justify-center cursor-pointer;
    color: $primary;
    background: $primary-light;
  }
  &.is-opened {
    z-index: 999;
    width: 450px;
    height: 600px;
    max-height: 600px;
    background: white;
    box-shadow: $base-shadow;
    cursor: default;
  }

  .progress-grid {
    @apply p-5 flex justify-between flex-wrap;
    .progress-item {
      width: 46%;
    }
  }

  .view-all-btn {
    @apply absolute pl-4 pr-3 py-1 flex items-center rounded-full cursor-pointer;
    color: rgba($secondary, 0.8);
    background: rgba($secondary, 0.06);
  }
}
</style>
