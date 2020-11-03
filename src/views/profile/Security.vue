<template>
  <div class="flex justify-center">
    <div class="w-1/3">
      <a-form
        hide-required-mark
        class="login-form"
        :form="form"
        @submit="handleForm"
      >
        <a-form-item
          v-for="({ label, decorator, size='large', placeholder, type='password' }) in formItems"
          :key="decorator[0]"
          :label="label"
        >
          <a-input
            class="login-input"
            :size="size"
            :type="type"
            :placeholder="placeholder"
            v-decorator="decorator"
          >
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            class="w-full"
            size="large"
            type="primary"
            html-type="submit"
            :loading="loading"
          >
            修改密码
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { removeToken } from '@/utils/token'

import { resetPassword } from '@/api/user'

export default {
  name: 'Profile',

  data() {
    return {
      form: this.$form.createForm(this),
      formItems: [
        {
          label: '旧密码',
          placeholder: '旧密码',
          decorator: [
            'oldPwd',
            { rules: [{ required: true, message: '请输入账号' }] },
          ],
        },
        {
          label: '再次旧密码',
          placeholder: '再次旧密码',
          decorator: [
            'oldPwd2',
            {
              rules: [{
                validator: (_, val = '', callback) => {
                  const oldPwd = this.form.getFieldValue('oldPwd')?.trim()
                  const oldPwd2 = val.trim()
                  if (oldPwd2.length <= 0) {
                    callback(new Error('请再次确认密码'))
                  }
                  if (oldPwd !== oldPwd2) {
                    callback(new Error('两次密码不一致'))
                  }
                  callback()
                },
              }],
            },
          ],
        },
        {
          label: '新密码',
          placeholder: '新密码',
          decorator: [
            'newPwd',
            { rules: [{ required: true, message: '请输入新密码' }] },
          ],
        },
      ],
      loading: false,
    }
  },

  methods: {
    handleForm(e) {
      e.preventDefault()

      this.form.validateFields(async (error, values) => {
        if (!error) {
          this.loading = true
          try {
            const { oldPwd: oldPassword, newPwd: newPassword } = values
            if (oldPassword && newPassword) {
              await resetPassword({
                oldPassword, newPassword,
              })
              removeToken()
              this.$router.replace('/login')
            } else {
              this.$message.error('密码加密失败')
            }
          } finally {
            this.loading = false
          }
        }
      })
    },
  },
}
</script>
