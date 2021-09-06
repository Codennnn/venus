<template>
  <div>
    <a-button
      class="mb-4"
      size="large"
      type="primary"
      @click="addNewBoard"
    >
      添加一个看板
    </a-button>

    <div class="kb">
      <div
        v-for="(it, i) in kbList"
        :key="i"
        class="kb-col"
      >
        <div class="mb-4 flex items-center">
          <a-input
            v-model="it.title"
            class="kb-col__input"
            @blur="onTitleEdited($event, it.id)"
          />
          <a-dropdown :trigger="['click']">
            <feather
              class="cursor-pointer"
              size="20"
              type="more-vertical"
            />
            <template #overlay>
              <a-menu>
                <a-menu-item @click="$message.success('已复制看板链接')">
                  复制看板链接
                </a-menu-item>
                <a-menu-item @click="deleteBoard(it.title)">
                  删除此看板
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <draggable
          v-model="it.dataList"
          v-bind="dragOptions"
        >
          <transition-group tag="ul">
            <li
              v-for="{ id, label, content, items, members } in it.dataList"
              :key="id"
              class="kb-col__item"
              :data-border="label"
              @click="showDrawer = true"
            >
              <div v-html="content" />
              <div
                v-if="items"
                class="mt-4 flex items-center text-xs"
              >
                <div
                  v-for="{ item, value } in items"
                  :key="item"
                  class="mr-2 flex items-center"
                >
                  <feather
                    class="mr-1"
                    size="12"
                    :type="itemIcon[item]"
                  />
                  {{ value }}
                </div>

                <div class="ml-auto flex-1 flex flex-wrap justify-end">
                  <a-avatar
                    v-for="{ id, avatar } in members"
                    :key="id"
                    class="kb-col__avatar text-xs primary bg-primary-light"
                    :size="22"
                  >
                    {{ avatar }}
                  </a-avatar>
                </div>
              </div>
            </li>
          </transition-group>
        </draggable>
        <div
          v-show="currAdd.title === it.title"
          class="mb-2"
        >
          <a-textarea
            v-model.trim="currAdd.content"
            class="mb-1"
            :auto-size="{ minRows: 3, maxRows: 5 }"
          />
          <a-button
            class="mr-2"
            size="small"
            type="primary"
            @click="addNewItem"
          >
            提交
          </a-button>
          <a-button
            size="small"
            type="danger"
            @click="reset"
          >
            取消
          </a-button>
        </div>
        <div class="flex items-center">
          <div
            class="flex items-center cursor-pointer"
            @click="currAdd.title = it.title"
          >
            <feather
              size="15"
              type="plus"
            />
            创建新项
          </div>
        </div>
      </div>
    </div>

    <kanban-drawer
      :visible="showDrawer"
      :data-source="currEdit"
      @close="showDrawer = false"
    />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import KanbanDrawer from './components/KanbanDrawer.vue'

export default {
  name: 'Kanban',

  components: { draggable, KanbanDrawer },

  data: () => ({
    kbList: [
      {
        id: 'board1',
        title: '定制主题',
        dataList: [
          {
            id: '1',
            label: 'primary',
            content: '君自故乡来，应知故乡事。来日绮窗前，寒梅著花未？🌺',
            items: [
              { item: 'time', value: '1-6' },
              { item: 'msg', value: 14 }, 
            ],
            members: [
              { id: '1', avatar: '头' },
              { id: '2', avatar: '像' },
            ],
          },
          {
            id: '2',
            label: 'warning',
            content: '昨夜裙带解，今朝蟢子飞。',
            items: [
              { item: 'time', value: '2-4' },
              { item: 'msg', value: 19 },
            ],
            members: [
              { id: '1', avatar: 'B' },
              { id: '2', avatar: 'V' },
            ],
          },
          {
            id: '3',
            label: 'danger',
            content: '铅华不可弃，莫是藁砧归。',
            items: [{ item: 'time', value: '1-9' }],
          },
          {
            id: '4',
            label: 'success',
            content: '闺中少妇不知愁，春日凝妆上翠楼。',
            items: [
              { item: 'time', value: '6-6' },
              { item: 'msg', value: 1 },
            ],
          },
          {
            id: '5',
            label: 'info',
            content: '忽见陌头杨柳色，悔教夫婿觅封侯。',
            items: [
              { item: 'time', value: '4-1' },
              { item: 'msg', value: 45 },
            ],
            members: [
              { id: '1', avatar: 'A' },
              { id: '2', avatar: 'V' },
            ],
          },
        ],
      },
      {
        id: 'board2',
        title: '常见问题',
        dataList: [
          {
            id: '6',
            label: 'secondary',
            content: '九月九日忆山东兄弟',
            items: [
              { item: 'time', value: '6-9' },
              { item: 'msg', value: 19 },
            ],
          },
          {
            id: '7',
            label: 'secondary',
            content: '独在异乡为异客，每逢佳节倍思亲。',
            items: [
              { item: 'time', value: '7-1' },
              { item: 'msg', value: 11 },
            ],
          },
          {
            id: '8',
            content: '遥知兄弟登高处，遍插茱萸少一人。🐸',
          },
          {
            id: '9',
            content:
              '<img width=100% src="https://portrait.gitee.com/uploads/avatars/user/1608/4826670_chinesee_1578975163.png!avatar200"><p>点击编辑看板卡片 👀</p>',
          },
        ],
      },
      {
        id: 'board3',
        title: '支持我们',
        dataList: [
          {
            id: '10',
            label: 'success',
            content: '千山鸟飞绝，万径人踪灭。',
            items: [
              { item: 'time', value: '6-9' },
              { item: 'msg', value: 19 },
            ],
            members: [
              { id: '1', avatar: '我' },
              { id: '2', avatar: '是' },
              { id: '3', avatar: '头' },
              { id: '4', avatar: '像' },
            ],
          },
          {
            id: '11',
            label: 'primary',
            content: '孤舟蓑笠翁',
            items: [
              { item: 'time', value: '7-16' },
              { item: 'msg', value: 11 },
            ],
            members: [
              { id: '1', avatar: '头' },
              { id: '2', avatar: '像' },
            ],
          },
          {
            id: '12',
            label: 'warning',
            content: '独钓寒江雪🐣',
            items: [
              { item: 'time', value: '4-9' },
              { item: 'msg', value: 19 },
            ],
          },
          {
            id: '13',
            label: 'danger',
            content: '独在异乡为异客，每逢佳节倍思亲。',
            items: [
              { item: 'time', value: '7-1' },
              { item: 'msg', value: 11 },
            ],
            members: [
              { id: '1', avatar: '头' },
              { id: '2', avatar: '像' },
            ],
          },
        ],
      },
    ],
    itemIcon: {
      time: 'clock',
      msg: 'message-square',
    },
    dragOptions: {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost',
    },
    currAdd: { id: '', title: '', content: '' },
    currEdit: {
      title: '这是一个看板标题',
      time: null,
      label: 'primary',
      content: '',
      fileName: '',
    },
    showDrawer: false,
  }),

  methods: {
    addNewBoard() {
      this.kbList.push({ title: '默认标题', dataList: [] })
    },

    addNewItem() {
      if (this.currAdd.content.length > 0) {
        this.kbList.some((el) => {
          if (el.title === this.currAdd.title) {
            el.dataList.push({ id: '10086', content: this.currAdd.content })
            this.reset()
            return true
          }
          return false
        })
      }
    },

    deleteBoard(boardTitle) {
      this.$confirm({
        title: (
          <p>
            此操作将删除<span class="warning">「{boardTitle}」</span>看板
          </p>
        ),
        content: '请点击确定按钮以删除',
        onOk: () => {
          // MOCK: 模拟删除一个看板
          this.kbList.some((el, i, self) => {
            if (el.title === boardTitle) {
              self.splice(i, 1)
              return true
            }
            return false
          })
        },
      })
    },

    onTitleEdited({ target: { value } }, boardId) {
      // MOCK: 模拟更改看板的标题
      this.$message.loading('正在更改看板标题..', 1.5).then(() => {
        this.$message.success(`看板标题已修改为：${value}-${boardId}`, 2.5)
      })
    },

    // 重置正在编辑的看板项
    reset() {
      this.currAdd = { title: '', content: '', fileName: '' }
    },
  },
}
</script>

<style lang="scss" scoped>
.kb {
  @apply flex flex-wrap items-start justify-start;
  &-col {
    @apply mr-8 mb-4 p-4 bg-gray-200 rounded-lg list-none;
    width: 300px;
    &__input {
      margin-right: 1rem;
      background: transparent;
      border: none;
      &:hover,
      &:focus {
        color: $primary;
        background: $primary-light;
      }
    }
    &__item {
      @apply relative mb-4 p-3 pl-4 rounded bg-white cursor-pointer;
      box-shadow: 0 10px 15px -5px rgba($secondary, 0.1);

      @each $color in primary, secondary, success, warning, danger, info {
        &[data-border='#{$color}'] {
          &::before {
            @apply absolute top-0 left-0 h-full w-1 overflow-hidden;
            content: '';
            background: map-get($color-map, $color);
          }
        }
      }
    }
    &__avatar {
      @apply relative -ml-2 cursor-pointer;
      transition: $transition;
      border: 2px solid #fff;
      &:hover {
        transform: translateY(-3px);
        z-index: 10;
      }
    }
  }
}
</style>
