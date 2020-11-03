<template>
  <div>
    <div class="section-card">
      <h3 class="section-card__title">加载占位图</h3>
      <p>在需要等待加载内容的位置提供一个占位图。</p>
      <h4 class="mt-6 mb-2 text-xl">何时使用</h4>
      <ul class="mb-10 pl-6 list-disc">
        <li class="mb-2">网络较慢，需要长时间等待加载处理的情况下。</li>
        <li class="mb-2">图文信息内容较多的列表/卡片中。</li>
        <li class="mb-2">只在第一次加载数据的时候使用。</li>
      </ul>

      <div class="mb-4 flex items-center">
        <span>点击切换状态</span>
        <div
          style="margin: 0 0 5px 2px;"
          class="mr-4"
        >👉🏻</div>
        <a-switch
          v-model="switchChecked"
          @change="onSwitchChange"
        />
        <span class="ml-3">{{ loading ? '骨架屏进行中...' : '骨架屏已结束' }}</span>
      </div>
      <a-skeleton
        active
        avatar
        v-for="({ title, desc, content }, index) in [
            { title: '风景如画，生活的色彩', desc: '生活，多姿多彩，就好像一部连续剧', content: '生活，自有酸甜苦辣，就好像调色板。生活，多姿多彩，就好像一部连续剧，从中有酸有甜，有苦有辣。总之，生活需要色彩才会精彩！红色，生活中需要你的激情，你一旦有了激情，那就是为以后打好基础，自然，有了激情做什么都简单，激情是生活中丰富的一面，它随时陪伴着你，你若能唤醒它，它就会给你人生上的成功。' },
            { title: '联系虽然方便了，可关系却淡了', desc: '时过境迁，人世轮回，世界万物，瞬息万变', content: '曾经的曾经，我们只能通过书信与异地的朋友谈心，互诉衷肠。那时的我们，最期待的就是朋友的来信，每当自己寄出一份问候的时候，就会迫切希望得到回复，每天回家的第一件事就是看看邮箱是否会有厚厚的书信趟在那里，如果有我们就会兴奋的立刻拆开来看，如果没有我们就会把希望寄托在明天。' },
            { title: '有所敬畏', desc: '相信神圣的人有所敬畏。在他的心目中，总有一些东西属于做人的根本', content: '在这个世界上，有的人信神，有的人不信，由此而区分为有神论者和无神论者、宗教徒和俗人。不过，这个区分并非很重要。还有一个比这重要得多的区分，便是有的人相信神圣，有的人不相信，人由此而分出了高尚和卑鄙。' },
          ]"
        :key="index"
        :loading="loading"
      >
        <div class="mb-8">
          <div class="flex items-center">
            <a-avatar
              slot="avatar"
              size="large"
              class="mr-4 bg-primary-light primary"
            >{{ title.charAt(0) }}</a-avatar>
            <div>
              <div>{{ title }}</div>
              <div class="text-sm text-gray-500">{{ desc }}</div>
            </div>
          </div>
          <div class="my-4">{{ content }}</div>
          <div class="flex text-gray-600">
            <div class="mr-5 flex items-center">
              <feather
                class="mr-1"
                size="16"
                type="message-circle"
              />
              <span>174</span>
            </div>
            <div class="mr-5 flex items-center">
              <feather
                class="mr-1"
                size="16"
                type="thumbs-up"
              />
              <span>54</span>
            </div>
            <div class="mr-5 flex items-center">
              <feather
                class="mr-1"
                size="16"
                type="share-2"
              />
              <span>99</span>
            </div>
          </div>
        </div>
      </a-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skeleton',

  data() {
    return {
      loading: true,
      switchChecked: false,
    }
  },

  mounted() {
    this.autoFinish()
  },

  methods: {
    onSwitchChange(checked) {
      if (!checked) {
        this.loading = true
        this.autoFinish()
      } else {
        this.loading = false
      }
    },

    autoFinish() {
      setTimeout(() => {
        this.loading = false
        this.switchChecked = true
      }, 2400)
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
