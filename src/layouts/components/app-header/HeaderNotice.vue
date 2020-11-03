<template>
  <a-popover
    v-model="visible"
    trigger="click"
    placement="bottom"
  >
    <template #content>
      <div class="w-64">
        <div class="flex justify-between items-center">
          <div class="text-gray-900">5 条新通知</div>
          <div
            class="text-gray-500 hover:primary transition cursor-pointer"
            @click="setAllNoticeRead()"
          >全部已读</div>
        </div>

        <div class="divider"></div>

        <a-spin :spinning="spinning">
          <ul class="notice-list -mx-4 px-2">
            <li
              class="p-2 flex items-center text-sm rounded cursor-pointer transition"
              v-for="({ id, title, time, type }) in noticeList"
              :key="id"
              :class="`hover-${noticeTypes[type].color}`"
            >
              <div
                class="mr-4 flex items-center justify-center rounded-full"
                style="padding: 0.35rem;"
                :class="`bg-${noticeTypes[type].color}-light`"
              >
                <feather
                  size="18"
                  :class="noticeTypes[type].color"
                  :type="noticeTypes[type].icon"
                />
              </div>
              <div>
                <div class="title transition">{{ title }}</div>
                <div class="text-gray-500">{{ time }}</div>
              </div>
            </li>
          </ul>
        </a-spin>

        <div class="divider"></div>

        <div class="primary text-center cursor-pointer opacity-75 hover:opacity-100 transition">查看全部通知</div>
      </div>
    </template>
    <a-badge
      dot
      class="mt-1"
    >
      <feather type="bell" />
    </a-badge>
  </a-popover>
</template>

<script>
export default {
  name: 'HeaderNotice',

  data: () => ({
    visible: false,
    spinning: false,
    noticeList: [
      {
        id: '1', title: '订单已创建', time: '2 分钟前', type: 'primary',
      },
      {
        id: '2', title: '系统升级程序已准备就绪', time: '30 分钟前', type: 'success',
      },
      {
        id: '3', title: '今日剩余 3 项待办事项', time: '1 小时前', type: 'warning',
      },
      {
        id: '4', title: '系统存在 2 个安全隐患', time: '5 小时前', type: 'danger',
      },
      {
        id: '5', title: '6 个文件已完成下载', time: '2020-08-01', type: 'info',
      },
    ],
    noticeTypes: {
      undefined: {
        icon: 'bell',
        color: 'primary',
      },
      primary: {
        icon: 'bell',
        color: 'primary',
      },
      success: {
        icon: 'check-circle',
        color: 'success',
      },
      warning: {
        icon: 'layers',
        color: 'warning',
      },
      danger: {
        icon: 'alert-circle',
        color: 'danger',
      },
      info: {
        icon: 'download',
        color: 'info',
      },
    },
  }),

  methods: {
    setAllNoticeRead() {
      this.spinning = true
      setTimeout(() => {
        this.spinning = false
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
@each $color in primary, success, warning, danger, info {
  .hover-#{$color}:hover {
    background: rgba(var(--#{$color}), 0.06);
    .title {
      color: rgba(var(--#{$color}), 1);
    }
  }
}

.notice-list {
  max-height: 290px;
  overflow-y: auto;
}

.divider {
  @apply my-2 bg-gray-300;
  width: 100%;
  height: 1px;
}
</style>
