<template>
  <div>
    <!-- 第一行 -->
    <section class="row">
      <div class="w-1/3 pr-3">
        <div class="dashboard-card">
          <div class="mb-12">
            <h2 class="text-2xl text-gray-700 font-bold">
              令狐少侠，恭喜你
            </h2>
            <h3 class="text-gray-600">
              成为本月最佳销售员
            </h3>
          </div>
          <div class="flex items-end">
            <div class="w-1/2 mr-4">
              <b class="primary text-5xl">￥89k</b>
              <p class="mb-2 text-gray-600">
                您今日已完成<br>57.6% 的销售额
              </p>
              <a-button
                size="large"
                type="primary"
              >
                查看销售记录
              </a-button>
            </div>
            <div class="flex-1">
              <img
                class="w-full"
                src="@img/cup.png"
                alt="cup"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 px-3">
        <div class="dashboard-card">
          <h3 class="dashboard-card-title mb-2">
            2020 年浏览量
            <feather
              class="cursor-pointer"
              size="20"
              type="more-vertical"
            />
          </h3>
          <multi-radial-chart />
          <ul class="flex items-center justify-around">
            <li
              v-for="({ label, color }) in [
                { label: '天猫', color: 'primary' },
                { label: '京东', color: 'danger' },
                { label: '拼多多', color: 'warning' },
              ]"
              :key="label"
              class="flex items-center"
            >
              <span
                class="inline-block w-2 h-2 rounded-full mr-2"
                :class="`bg-${color}`"
              />
              {{ label }}
            </li>
          </ul>
        </div>
      </div>
      <div class="w-1/3 pl-3 flex flex-col">
        <div class="flex mb-6">
          <div class="dashboard-card dashboard-card-icon mr-6">
            <div class="icon success">
              <feather type="shopping-bag" />
            </div>
            <div>新产品</div>
            <div class="text-2xl font-semibold">
              1.2k
            </div>
          </div>
          <div class="dashboard-card dashboard-card-icon">
            <div class="icon danger">
              <feather type="user" />
            </div>
            <div>新用户</div>
            <div class="text-2xl font-semibold">
              45.6k
            </div>
          </div>
        </div>
        <div class="dashboard-card flex-1 pt-3 pb-0">
          <h3 class="dashboard-card-title">
            收入趋势
          </h3>
          <revenue-chart />
        </div>
      </div>
    </section>

    <!-- 第二行 -->
    <section class="row">
      <div class="w-2/3 pr-3">
        <div
          style="padding: 0.5rem 0;"
          class="dashboard-card flex"
        >
          <div
            style="border-right: 1px solid #dedede;"
            class="flex-1 flex flex-col overflow-hidden"
          >
            <h3 class="dashboard-card-title px-6 py-4">
              订单概况
              <div>
                <a-button class="mr-4">
                  月度
                </a-button>
                <a-button type="primary">
                  周度
                </a-button>
              </div>
            </h3>
            <div
              style="margin: 0 -5px -6px -5px; over-flow: hidden;"
              class="mt-auto"
            >
              <order-summary-chart />
            </div>
          </div>
          <div class="w-1/3">
            <div style="border-bottom: 1px solid #eee;">
              <h3 class="card-title px-6 py-4">
                销售记录
              </h3>
              <ul class="px-6">
                <li
                  v-for="({ name, price, time }) in [
                    { name: '小米34寸显示器', price: '1999.0', time: '刚刚' },
                    { name: 'One Plus 7 pro', price: '3889.0', time: '25分钟前' },
                    { name: 'MagicBook pro', price: '4899.0', time: '4小时前' },
                  ]"
                  :key="name"
                  class="mb-4 flex items-center justify-between"
                >
                  <div>
                    <div class="text-gray-900 truncate">
                      {{ name }}
                    </div>
                    <div class="text-gray-600 text-sm">
                      {{ time }}
                    </div>
                  </div>
                  <div class="font-semibold">
                    ￥{{ price }}
                  </div>
                </li>
              </ul>
            </div>
            <div class="p-6">
              <h3 class="dashboard-card-title">
                总销售额
              </h3>
              <div class="primary mt-1 text-lg font-semibold">
                ￥82,950.9
              </div>
              <a-progress
                :show-info="false"
                :percent="75"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/3 pl-3">
        <div class="dashboard-card p-0">
          <h3 class="dashboard-card-title px-6 py-3">
            最近更新
            <a-dropdown>
              <div class="flex items-center text-base text-gray-500 font-semibold cursor-pointer">
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
          </h3>
          <perfect-scrollbar
            tag="ul"
            style="height: 313px;"
            class="px-6 overflow-hidden"
            :options="{
              suppressScrollX: true,
              maxScrollbarLength: 160,
              wheelSpeed: 0.60,
            }"
          >
            <li
              v-for="({ title, sub, icon, color, calc }) in [
                { title: '商品总量', sub: '新增1.2k商品', icon: 'shopping-bag', color: 'primary', calc: '10.6k' },
                { title: '总计销售量', sub: '最近销售39.4k', icon: 'award', color: 'warning', calc: '26M' },
                { title: '总计收入', sub: '最近收入43.5k', icon: 'zap', color: 'success', calc: '15.89M' },
                { title: '总计成本', sub: '已消费23.5k', icon: 'dollar-sign', color: 'danger', calc: '1.2B' },
                { title: '总浏览量', sub: '新增33.1k', icon: 'airplay', color: 'secondary', calc: '1.2B' },
              ]"
              :key="title"
              class="py-3 flex items-center"
            >
              <div
                class="w-10 h-10 mr-4 flex justify-center items-center rounded-full"
                :class="[color]"
                :style="{ 'background-color': `rgba(var(--${color}), .1)`, }"
              >
                <feather :type="icon" />
              </div>
              <div>
                <div>{{ title }}</div>
                <div>{{ sub }}</div>
              </div>
              <div class="ml-auto text-lg text-gray-600 font-bold">
                {{ calc }}
              </div>
            </li>
          </perfect-scrollbar>
        </div>
      </div>
    </section>

    <!-- 第三行 -->
    <section class="row">
      <div class="w-1/3 pr-3">
        <div class="dashboard-card">
          <h3 class="dashboard-card-title mb-6">
            销售排行
            <feather
              class="cursor-pointer"
              size="20"
              type="more-vertical"
            />
          </h3>
          <ul>
            <li
              v-for="({ name, title, percent, sales, color }) in [
                { name: '令狐少侠', title: '销售经理', percent: 90, sales: 89059, color: 'primary' },
                { name: '郭靖', title: '销售总监', percent: 84, sales: 82154, color: 'success' },
                { name: '周伯通', title: '销售专员', percent: 76, sales: 77368, color: 'warning' },
                { name: '张三丰', title: '销售专员', percent: 70, sales: 66345, color: 'danger' },
                { name: '风清扬', title: '销售专员', percent: 60, sales: 55691, color: 'secondary' },
              ]"
              :key="name"
              class="py-2 flex items-center"
            >
              <a-avatar
                size="large"
                :style="`color: rgba(var(--${color}), 1); background-color: rgba(var(--${color}), .15);`"
              >
                {{ name.charAt(0) }}
              </a-avatar>
              <div class="w-20 ml-3 mr-2">
                <div>{{ name }}</div>
                <div class="text-sm">
                  {{ title }}
                </div>
              </div>
              <a-progress
                class="w-24"
                :stroke-color="`rgba(var(--${color}), 1)`"
                :show-info="false"
                :percent="percent"
              />
              <a-tag
                class="ml-auto"
                :color="`rgba(var(--${color}), .9)`"
              >
                ￥{{ sales }}
              </a-tag>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-2/3 pl-3">
        <div class="dashboard-card p-0">
          <h3 class="dashboard-card-title mb-2 px-6 py-3">
            营销活动
            <a-button class="flex items-center">
              <span>查看报告</span>
              <feather
                size="20"
                type="chevron-right"
              />
            </a-button>
          </h3>
          <div>
            <a-table
              class="tableCampaign"
              row-key="id"
              :columns="tableColumns"
              :data-source="tableDataSource"
              :pagination="false"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MultiRadialChart from '@comp/charts/MultiRadialChart.vue'
import RevenueChart from '@comp/charts/RevenueChart.vue'
import OrderSummaryChart from '@comp/charts/OrderSummaryChart.vue'

export default {
  name: 'Ecommerce',

  components: { MultiRadialChart, RevenueChart, OrderSummaryChart },

  data() {
    return {
      tableColumns: [
        {
          title: '活动品牌',
          customRender: ({ trademark, campaign }) => (
            <div class="flex items-center">
              <img class="w-6 mr-4" src={trademark} />
              <span>{campaign}</span>
            </div>
          ),
        },
        {
          title: '销售趋势',
          customRender: ({ growth }) => {
            if (growth >= 0) {
              return (
                <div class="flex items-center">
                  <feather class="success mr-3" size="18" type="trending-up" />
                  <span class="text-gray-600 font-semibold">{growth}%</span>
                </div>
              )
            }
            return (
              <div class="flex items-center">
                <feather class="danger mr-3" size="18" type="trending-down" />
                <span class="text-gray-600 font-semibold">{Math.abs(growth)}%</span>
              </div>
            )
          },
        },
        {
          title: '费用',
          dataIndex: 'charge',
          customRender: (charge) => (
            <span class="text-gray-600 font-semibold">￥{charge.toLocaleString()}</span>
          ),
        },
        {
          title: '状态',
          dataIndex: 'status',
          customRender: (status) => {
            if (status === 1) {
              return (<span class="success">进行中</span>)
            }
            return (<span class="danger">已结束</span>)
          },
        },
      ],
      tableDataSource: [
        {
          id: '1', campaign: '小米10旗舰机', growth: 30.50, charge: 5536, status: 1, trademark: require('@img/trademark/mi.png'),
        },
        {
          id: '2', campaign: '麦当劳汉堡包', growth: -15.5, charge: 12897, status: 2, trademark: require('@img/trademark/mdn.png'),
        },
        {
          id: '3', campaign: '耐克 Air Jordan', growth: -70.30, charge: 23859, status: 2, trademark: require('@img/trademark/nike.png'),
        },
        {
          id: '4', campaign: 'Oneplus 7 pro', growth: 70.30, charge: 23859, status: 1, trademark: require('@img/trademark/oneplus.png'),
        },
        {
          id: '5', campaign: '华为 Mate 30', growth: 10.4, charge: 23859, status: 1, trademark: require('@img/trademark/huawei.png'),
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.row {
  @apply mb-6 flex flex-wrap;
  .dashboard-card {
    @apply h-full px-6 py-4 bg-white rounded-lg;
    &-icon {
      @apply flex-1 py-3 flex flex-col items-center justify-center;
      .icon {
        @apply w-12 h-12 mb-2 flex justify-center items-center rounded-full;
        border-radius: 50%;
        &.success {
          color: $success;
          background: rgba($success, 0.15);
        }
        &.danger {
          color: $danger;
          background: rgba($danger, 0.15);
        }
      }
    }

    &-title {
      @apply flex items-center justify-between text-xl text-gray-600 font-semibold whitespace-no-wrap;
    }
  }
}
</style>

<style lang="scss" scoped>
.tableCampaign::v-deep {
  .ant-table-row td {
    border: none;
  }
}
</style>
