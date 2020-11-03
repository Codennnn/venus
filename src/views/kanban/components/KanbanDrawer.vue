<template>
  <a-drawer
    width="400"
    :closable="false"
    :mask="false"
    :visible="visible"
  >
    <template #title>
      <div class="flex items-center">
        <h3>{{ editData.title }}</h3>
        <feather
          class="ml-auto cursor-pointer"
          size="21"
          type="x"
          @click="onCloseDrawer"
        />
      </div>
    </template>
    <!-- 卡片标题 -->
    <div>
      <h4 class="mb-2 text-gray-500">卡片标题</h4>
      <a-input
        size="large"
        placeholder="请输入标题信息"
        v-model="editData.title"
      />
    </div>

    <!-- 日期选择 -->
    <div>
      <h4 class="mt-6 mb-2 text-gray-500">完成时间</h4>
      <a-date-picker
        class="w-full"
        size="large"
        v-model="editData.time"
      />
    </div>

    <!-- 颜色标签 -->
    <div class="flex justify-between items-start">
      <div class="w-1/2">
        <h4 class="mt-6 mb-2 text-gray-500">颜色标签</h4>
        <a-dropdown :trigger="['click']">
          <div
            class="w-10 h-10 mr-2 rounded-full cursor-pointer shadow-md"
            :class="`bg-${editData.label}`"
          ></div>
          <template #overlay>
            <a-menu>
              <a-menu-item
                class="flex items-center"
                v-for="(color, i) in ['primary', 'success', 'warning', 'danger', 'info', 'secondary']"
                :key="i"
                @click="editData.label = color"
              >
                <div
                  class="w-5 h-5 mr-2 rounded-full"
                  :class="`bg-${color}`"
                ></div>
                {{ color.toUpperCase() }}
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </div>

      <div class="w-1/2">
        <h4 class="mt-6 mb-2 text-gray-500">成员</h4>
        <div class="flex items-center">
          <a-avatar
            class="mr-3 bg-secondary-light cursor-pointer"
            size="large"
            :src="$store.state.user.info.avatar"
          />
          <a-avatar
            class="bg-secondary-light cursor-pointer"
            size="large"
          >
            <feather
              style="margin-top: 7px;"
              class="secondary"
              type="plus"
            />
          </a-avatar>
        </div>
      </div>
    </div>

    <!-- 附件上传 -->
    <div>
      <h4 class="mt-6 mb-2 text-gray-500">添加附件</h4>
      <a-input
        size="large"
        placeholder="请输入附件链接"
        v-model="editData.fileName"
      >
        <template #addonAfter>
          <div
            class="cursor-pointer"
            @click="uploadAttachment"
          >或点击上传附件</div>
        </template>
      </a-input>
      <input
        id="attachment"
        type="file"
        hidden
      />
    </div>

    <div class="relative">
      <h4 class="mt-6 mb-2 text-gray-500">编辑内容</h4>
      <a-textarea
        v-model="editData.content"
        placeholder="在这里编辑任务内容"
        :auto-size="{ minRows: 6, maxRows: 10 }"
      />
      <div class="absolute bottom-0 right-0 m-2 flex items-center">
        <feather
          class="mr-3 cursor-pointer"
          size="18"
          v-for="(icon) in ['bold', 'italic', 'link', 'youtube', 'image']"
          :key="icon"
          :type="icon"
        />
      </div>
    </div>

    <div class="absolute right-0 bottom-0 mr-3 mb-3 flex items-center">
      <a-popconfirm
        title="此操作将删除该看板，是否继续？"
        ok-text="删除"
        cancel-text="点错了"
        @confirm="deleteBoard"
      >
        <a-button
          class="mr-5 flex items-center"
          size="large"
          type="danger"
        >
          <feather
            class="mr-2"
            size="20"
            type="trash"
          />
          删 除
        </a-button>
      </a-popconfirm>
      <a-button
        class="flex items-center"
        size="large"
        type="primary"
        @click="onCloseDrawer"
      >
        <feather
          class="mr-2"
          size="20"
          type="save"
        />
        保 存
      </a-button>
    </div>
  </a-drawer>
</template>

<script>
import _clonedeep from 'lodash.clonedeep'

export default {
  name: 'KanbanDrawer',

  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    dataSource: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    editData: {},
  }),

  watch: {
    dataSource: {
      handler(val) {
        this.editData = _clonedeep(val)
      },
      immediate: true,
    },
  },

  methods: {
    // 上传看板附件
    uploadAttachment() {
      const fileInput = document.getElementById('attachment')
      const that = this
      fileInput.onchange = function () {
        const { name } = this.files?.[0] || {}
        that.editData.fileName = name
      }
      fileInput.click()
    },

    deleteBoard() {
      this.onCloseDrawer()
    },

    onCloseDrawer() {
      this.$emit('close')
    },
  },
}
</script>
