<template>
  <div>
    <section class="row">
      <div class="w-1/2 pr-3">
        <div class="dashboard-card">
          <h3 class="dashboard-card-title mb-6">
            网站分析
          </h3>
          <div class="mb-4 flex items-center justify-around">
            <div
              v-for="({ label, percent, value, icon, color }) in [
                { label: '用户流量', percent: 34, value: '61K', icon: 'user', color: 'success' },
                { label: '访问次数', percent: 82, value: '92K', icon: 'trending-up', color: 'warning' },
                { label: '留存率', percent: 52, value: '72.6%', icon: 'pie-chart', color: 'danger' },
              ]"
              :key="label"
              class="flex flex-col justify-center items-center"
            >
              <div class="mb-2 flex items-center text-gray-600">
                <feather
                  size="18"
                  :type="icon"
                />
                <span class="ml-2">{{ label }}</span>
              </div>
              <div class="flex items-center">
                <a-progress
                  type="circle"
                  :width="35"
                  :show-info="false"
                  :stroke-width="12"
                  :stroke-color="{
                    '0%': `rgba(var(--${color}), .6)`,
                    '50%': `rgba(var(--${color}), .8)`,
                    '100%': `rgba(var(--${color}), .9)`,
                  }"
                  :percent="percent"
                />
                <div class="mb-1 ml-3 text-3xl">
                  {{ value }}
                </div>
              </div>
            </div>
          </div>
          <analytics-bar-chart />
        </div>
      </div>
      <div class="w-1/2 pl-3">
        <div class="mb-6 flex">
          <div class="pr-3 flex-1">
            <div class="dashboard-card pt-6 pb-0 flex flex-col items-center">
              <div class="text-3xl font-semibold">
                ￥32,690
              </div>
              <div class="text-gray-500">
                转换率 40%
              </div>
              <success-line-chart />
            </div>
          </div>
          <div class="pl-3 flex-1">
            <div class="dashboard-card flex flex-col justify-between">
              <div class="flex items-center justify-between">
                <div>
                  <div class="font-bold">
                    转换情况
                  </div>
                  <div class="flex items-center">
                    60%
                    <feather
                      class="success ml-1"
                      size="14"
                      type="trending-up"
                    />
                  </div>
                </div>
                <div class="text-3xl font-semibold">
                  89k
                </div>
              </div>
              <bar-negative-chart />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="w-1/2 pr-3">
            <div class="dashboard-card">
              <donut-chart />
              <ul class="my-1 flex justify-around">
                <li class="flex items-center">
                  <span
                    style="margin: 3px 5px 0 0;"
                    class="inline-block w-2 h-2 rounded-full bg-warning"
                  />
                  搜索
                </li>
                <li class="flex items-center">
                  <span
                    style="margin: 3px 5px 0 0;"
                    class="inline-block w-2 h-2 rounded-full bg-primary"
                  />
                  社交
                </li>
                <li class="flex items-center">
                  <span
                    style="margin: 3px 5px 0 0; background-color: #00cfdd;"
                    class="inline-block w-2 h-2 rounded-full"
                  />
                  邮件
                </li>
              </ul>
            </div>
          </div>
          <div class="w-1/2 pl-3 flex flex-col">
            <div class="dashboard-card mb-6 flex-1 flex items-center">
              <div
                style="min-width: 2.5rem; background: rgba(var(--primary), .18);"
                class="h-10 flex items-center justify-center primary rounded-full"
              >
                <feather
                  size="18"
                  type="user"
                />
              </div>
              <div class="mx-4 whitespace-no-wrap">
                <div class="font-semibold">
                  38,566
                </div>
                <div class="text-sm text-gray-500">
                  转换次数
                </div>
              </div>
              <div style="min-width: 6rem;">
                <primary-line-chart />
              </div>
            </div>
            <div class="dashboard-card flex-1 flex items-center">
              <div
                style="min-width: 2.5rem; background: rgba(var(--warning), .18);"
                class="h-10 flex items-center justify-center warning rounded-full"
              >
                <feather
                  size="18"
                  type="dollar-sign"
                />
              </div>
              <div class="mx-4 whitespace-no-wrap">
                <div class="font-semibold">
                  53,659
                </div>
                <div class="text-sm text-gray-500">
                  收益
                </div>
              </div>
              <div style="min-width: 6rem;">
                <warning-line-chart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row">
      <div class="w-1/2 pr-3 flex">
        <div class="w-1/2 pr-3">
          <div class="dashboard-card pb-2">
            <h3 class="dashboard-card-title mb-4">
              活动面板
            </h3>
            <ul>
              <li
                v-for="({ title, icon, color, value, percent }) in [
                  { title: '总销售额', icon: 'bar-chart-2', color: 'primary', value: '￥8,125', percent: 50 },
                  { title: '总收益', icon: 'pocket', color: 'success', value: '￥18,963', percent: 50 },
                  { title: '总成本', icon: 'dollar-sign', color: 'warning', value: '￥14,150', percent: 50 },
                  { title: '完成任务', icon: 'award', color: 'danger', value: '106', percent: 50 },
                ]"
                :key="title"
                class="py-3 flex items-center"
              >
                <div
                  class="w-10 h-10 mr-4 flex justify-center items-center rounded-full"
                  :class="[color]"
                  :style="{ 'background-color': `rgba(var(--${color}), .1)`, }"
                >
                  <feather
                    size="20"
                    :type="icon"
                  />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between text-xs text-gray-600">
                    <span>{{ title }}</span>
                    <span>{{ value }}</span>
                  </div>
                  <a-progress
                    :show-info="false"
                    :stroke-width="5"
                    :stroke-color="`rgba(var(--${color}), 1)`"
                    :percent="percent"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-1/2 pl-3 flex flex-col">
          <div class="dashboard-card flex-1 mb-6">
            <h3 class="dashboard-card-title mb-8">
              营收报告
              <feather
                class="cursor-pointer"
                size="20"
                type="more-vertical"
              />
            </h3>
            <div class="flex items-center justify-between">
              <div
                v-for="({ percent, value, color }) in [
                  { percent: 60, value: '12K', color: 'primary' },
                  { percent: 70, value: '64K', color: 'info' },
                ]"
                :key="percent"
                class="flex flex-col justify-center items-center"
              >
                <div class="flex items-center">
                  <a-progress
                    type="circle"
                    :width="35"
                    :show-info="false"
                    :stroke-width="12"
                    :stroke-color="{
                      '0%': `rgba(var(--${color}), .6)`,
                      '50%': `rgba(var(--${color}), .8)`,
                      '100%': `rgba(var(--${color}), .9)`,
                    }"
                    :percent="percent"
                  />
                  <div class="ml-2">
                    <div class="text-lg">
                      ￥{{ value }}
                    </div>
                    <div class="ml-2 text-xs">
                      2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dashboard-card flex-1">
            <h3 class="dashboard-card-title mb-8">
              新注册流量
            </h3>
            <div class="flex items-end justify-between">
              <div>
                <div class="text-xl">
                  56.3k
                </div>
                <feather
                  class="success -mb-1"
                  size="18"
                  type="trending-up"
                />
                <div class="success">
                  12.8%
                </div>
              </div>
              <div class="ml-4 flex-1">
                <registration-chart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 pl-3 flex">
        <div class="w-1/2 pr-3">
          <div class="dashboard-card">
            <h3 class="dashboard-card-title">
              营业额
            </h3>
            <div class="mb-2 text-xs text-gray-500">
              最近 7 天统计
            </div>
            <sales-chart />
            <div class="py-6 flex items-center">
              <feather
                class="primary mr-3"
                type="arrow-up-circle"
              />
              <div>
                <div>销量最佳</div>
                <div class="text-xs">
                  周日
                </div>
              </div>
              <div class="ml-auto text-lg">
                986k
              </div>
            </div>
            <div class="flex items-center">
              <feather
                class="text-gray-500 mr-3"
                type="arrow-down-circle"
              />
              <div>
                <div>销量最低</div>
                <div class="text-xs">
                  周二
                </div>
              </div>
              <div class="ml-auto text-lg">
                28.6k
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 pl-3">
          <div class="dashboard-card py-6">
            <div class="flex justify-center">
              <a-dropdown>
                <div class="flex items-center text-base text-gray-500 cursor-pointer">
                  2020
                  <feather
                    class="ml-1"
                    size="20"
                    type="chevron-down"
                  />
                </div>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      2020
                    </a-menu-item>
                    <a-menu-item>
                      2019
                    </a-menu-item>
                    <a-menu-item>
                      2018
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
            <growth-chart />
            <div class="mt-4 text-center">
              2020 年公司营收增长 78%
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="row">
      <div class="w-3/5 pr-3">
        <div class="dashboard-card p-0">
          <div
            style="border-bottom: 1px solid #eee;"
            class="mb-2 px-6 py-4 flex items-center"
          >
            <h3 class="dashboard-card-title">
              任务
            </h3>
            <div class="ml-auto flex items-center">
              <a-dropdown class="mr-6">
                <div class="flex items-center cursor-pointer">
                  <feather
                    class="mr-1"
                    size="18"
                    type="check-circle"
                  />
                  所有任务
                  <feather
                    class="ml-1 text-gray-500"
                    size="18"
                    type="chevron-down"
                  />
                </div>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      已完成
                    </a-menu-item>
                    <a-menu-item>
                      带完成
                    </a-menu-item>
                    <a-menu-item>
                      已丢弃
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
              <a-dropdown>
                <div class="flex items-center cursor-pointer">
                  <feather
                    class="mr-1"
                    size="20"
                    type="list"
                  />
                  默认排序
                  <feather
                    class="ml-1 text-gray-500"
                    size="18"
                    type="chevron-down"
                  />
                </div>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      已完成
                    </a-menu-item>
                    <a-menu-item>
                      带完成
                    </a-menu-item>
                    <a-menu-item>
                      已丢弃
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </div>
          <ul>
            <li
              v-for="({ id, title, tag, tagColor, avatar }, i) in todos"
              :key="id"
              class="px-5 py-4 flex items-center hover:bg-gray-100 transition"
            >
              <a-checkbox v-model="todos[i].done" />
              <div class="mx-4 truncate text-gray-600">
                {{ title }}
              </div>
              <div
                class="ml-auto flex items-center text-sm rounded-lg"
                :style="`padding: .1rem 1rem; background: rgba(var(--${tagColor}), .2);`"
                :class="tagColor"
              >
                {{ tag }}
              </div>
              <a-avatar
                class="mx-3"
                :style="`color: rgba(var(--${tagColor}), 1); background-color: rgba(var(--${tagColor}), .15);`"
              >
                {{ avatar }}
              </a-avatar>
              <a-dropdown>
                <div class="flex items-center text-base text-gray-500 cursor-pointer">
                  <feather
                    class="cursor-pointer"
                    size="20"
                    type="more-vertical"
                  />
                </div>
                <template #overlay>
                  <a-menu>
                    <a-menu-item
                      class="flex items-center"
                      @click="editTodo(id)"
                    >
                      <feather
                        class="mr-2 cursor-pointer"
                        size="16"
                        type="edit"
                      />
                      编辑
                    </a-menu-item>
                    <a-menu-item
                      class="flex items-center"
                      @click="editTodo(id)"
                    >
                      <feather
                        class="mr-2 cursor-pointer"
                        size="16"
                        type="trash"
                      />
                      删除
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-2/5 pl-3">
        <div class="dashboard-card">
          <h3 class="dashboard-card-title mb-6">
            交互时间线
          </h3>
          <a-timeline class="timeline">
            <a-timeline-item
              v-for="({ action, file, time, icon }, index) in [
                { action: '小明审核了您的文章投稿', file: '网页设计大赛开幕式流程.pdf', time: '5分钟前', icon: require('@img/pdf.png') },
                { action: '提交了一份 PDF 文件', file: '毕业设计论文终稿.pdf', time: '2小时前', icon: require('@img/pdf.png') },
                { action: '上传了网页设计原型图', file: 'Venus 系统设计图.psd', time: '1天前', icon: require('@img/psd.png') },
              ]"
              :key="index"
            >
              <template #dot>
                <div
                  style="box-shadow: 1px 2px 6px 0 rgba(25,42,70,.3);"
                  class="relative w-4 h-4 rounded-full bg-white"
                >
                  <div
                    style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
                    class="absolute w-2 h-2 rounded-full bg-primary"
                  />
                </div>
              </template>
              <div>{{ action }}</div>
              <p class="mb-4 text-xs text-gray-500">
                {{ time }}
              </p>
              <div class="flex items-center text-sm text-black cursor-pointer hover:primary transition">
                <img
                  class="w-6 mr-3"
                  alt="pdf"
                  :src="icon"
                >
                <span>{{ file }}</span>
              </div>
            </a-timeline-item>
          </a-timeline>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AnalyticsBarChart from '@comp/charts/AnalyticsBarChart.vue'
import SuccessLineChart from '@comp/charts/SuccessLineChart.vue'
import BarNegativeChart from '@comp/charts/BarNegativeChart.vue'
import DonutChart from '@comp/charts/DonutChart.vue'
import PrimaryLineChart from '@comp/charts/PrimaryLineChart.vue'
import WarningLineChart from '@comp/charts/WarningLineChart.vue'
import RegistrationChart from '@comp/charts/RegistrationChart.vue'
import SalesChart from '@comp/charts/SalesChart.vue'
import GrowthChart from '@comp/charts/GrowthChart.vue'

export default {
  name: 'Analytics',

  components: {
    AnalyticsBarChart, SuccessLineChart, BarNegativeChart, DonutChart, PrimaryLineChart, WarningLineChart, RegistrationChart, SalesChart, GrowthChart,
  },

  data: () => ({
    todos: [
      {
        id: '1', title: '白日依山尽，黄河入海流。', tag: '前端', tagColor: 'success', avatar: 'A', done: false,
      },
      {
        id: '2', title: '故人西辞黄鹤楼，烟花三月下扬州。', tag: '后端', tagColor: 'danger', avatar: 'B', done: false,
      },
      {
        id: '3', title: '两岸猿声啼不住，轻舟已过万重山。', tag: 'UI/UX', tagColor: 'primary', avatar: 'C', done: true,
      },
      {
        id: '4', title: '红颜未老恩先断，斜倚薰笼坐到明。', tag: '界面设计', tagColor: 'info', avatar: 'D', done: false,
      },
      {
        id: '5', title: '嫦娥应悔偷灵药，碧海青天夜夜心。', tag: 'JAVASCRIPT', tagColor: 'warning', avatar: 'E', done: false,
      },
    ],
  }),

  methods: {
    editTodo(id) {
      this.$message.success(`您点击了 ID 为 ${id} 的任务`)
    },
  },
}
</script>

<style lang="scss" scoped>
.timeline::v-deep {
  .ant-timeline-item-content {
    margin-left: 40px;
  }
}
</style>
