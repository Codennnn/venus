<template>
  <div>
    <div class="flex items-center">
      <a-avatar :size="80" :src="info.avatar" />
      <div class="ml-4">
        <div class="mb-2 text-xl">
          {{ info.nickname }}
        </div>
        <div>
          <a-button class="text-xs" type="primary" @click="avatarUploadVisible = true">
            更改头像
          </a-button>
          <a-button class="ml-1 text-xs"> 重置 </a-button>
        </div>
      </div>
    </div>

    <div class="my-8">
      <a-form hide-required-mark class="account-form" :form="form">
        <a-form-item
          v-for="{ label, decorator, size = 'large', placeholder } in formItems"
          :key="decorator[0]"
          class="account-form__item"
          :label="label"
        >
          <a-input
            v-decorator="decorator"
            class="login-input"
            :size="size"
            :placeholder="placeholder"
          />
        </a-form-item>
      </a-form>
    </div>

    <div>
      <table class="permission-table">
        <thead>
          <tr>
            <th>功能模块权限</th>
            <th>Read</th>
            <th>Write</th>
            <th>Create</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>用户 [Users]</td>
            <td>
              <a-checkbox checked />
            </td>
            <td>
              <a-checkbox />
            </td>
            <td>
              <a-checkbox />
            </td>
            <td>
              <a-checkbox checked />
            </td>
          </tr>
          <tr>
            <td>文章 [Articles]</td>
            <td>
              <a-checkbox />
            </td>
            <td>
              <a-checkbox checked />
            </td>
            <td>
              <a-checkbox />
            </td>
            <td>
              <a-checkbox />
            </td>
          </tr>
          <tr>
            <td>看板 [Board]</td>
            <td>
              <a-checkbox />
            </td>
            <td>
              <a-checkbox />
            </td>
            <td>
              <a-checkbox checked />
            </td>
            <td>
              <a-checkbox />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-6 flex justify-end">
      <a-button class="mr-4" size="large" type="primary"> 保存更改 </a-button>
      <a-button size="large"> 取消 </a-button>
    </div>

    <a-modal
      v-model="avatarUploadVisible"
      centered
      title="更改头像"
      :mask-closable="false"
      :footer="null"
    >
      <avatar-upload />
    </a-modal>
  </div>
</template>

<script>
import AvatarUpload from '@comp/AvatarUpload.vue'

export default {
  name: 'Account',

  components: { AvatarUpload },

  data() {
    return {
      form: this.$form.createForm(this),
      formItems: [
        {
          label: '账号',
          placeholder: '请输入账号',
          decorator: ['username', { initialValue: 'admin@magic.com' }],
        },
        {
          label: '昵称',
          placeholder: '请输入昵称',
          decorator: ['nickname', { initialValue: '令狐少侠' }],
        },
        {
          label: '邮箱',
          placeholder: '请输入邮箱',
          decorator: ['email', { initialValue: 'czc12580520@gmail.com' }],
        },
        {
          label: '角色',
          placeholder: '请输入角色',
          decorator: ['role', { initialValue: '销售经理' }],
        },
      ],
      avatarUploadVisible: false,
    }
  },

  computed: {
    info() {
      return this.$store.state.user.info
    },
  },
}
</script>

<style lang="scss" scoped>
.account-form {
  @apply -mx-3 flex flex-wrap;
  &__item::v-deep {
    @apply w-1/2 mb-4 px-3;
    .ant-form-item-label {
      line-height: 28px;
    }
  }
}

.permission-table {
  @apply w-full;
  thead {
    font-size: 18px;
    border-bottom: 2px solid #dedede;
    th {
      padding-bottom: 1rem;
    }
  }
  tr {
    &:not(:last-child) {
      border-bottom: 1px solid #ededed;
    }
    td {
      padding: 1rem 0;
    }
  }
}
</style>
