<template>
  <div class="flex flex-col items-center justify-center">
    <a-form
      class="rigister-form"
      :form="form"
      @submit="onRegister"
    >
      <a-form-item
        v-for="({ icon, decorator, size='large', placeholder, type='text' }, index) in formItems"
        :key="index"
      >
        <a-input
          class="rigister-input"
          :size="size"
          :type="type"
          :placeholder="placeholder"
          @keydown.enter="onRegister"
          v-decorator="decorator"
        >
          <template #prefix>
            <feather
              stroke="#aaa"
              size="20"
              :type="icon"
            />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item style="margin: -15px 0 5px 0;">
        <a-checkbox v-decorator="['rememberMe', { valuePropName: 'checked' }]">
          <span>我已阅读<span class="primary">《隐私保护协议》</span></span>
        </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button
          class="w-full"
          size="large"
          type="primary"
          html-type="submit"
          :loading="loading"
        >
          立即注册
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Register',

  data() {
    const formItems = [
      {
        icon: 'user',
        placeholder: '注册账号',
        decorator: [
          'account',
          { rules: [{ required: true, message: '请输入账号' }] },
        ],
      },
      {
        icon: 'lock',
        placeholder: '登录密码',
        type: 'password',
        decorator: [
          'password',
          { rules: [{ required: true, message: '请输入密码' }] },
        ],
      },
      {
        icon: 'check-circle',
        placeholder: '确认密码',
        type: 'password',
        decorator: [
          'password2',
          {
            rules: [{
              validator: (_, val = '', callback) => {
                const password = this.form.getFieldValue('password')?.trim()
                const password2 = val.trim()
                if (password2.length <= 0) {
                  callback(new Error('请再次确认密码'))
                }
                if (password !== password2) {
                  callback(new Error('两次密码不一致'))
                }
                callback()
              },
            }],
          },
        ],
      },
    ]
    return {
      formItems,
      form: this.$form.createForm(this),
      loading: false,
    }
  },

  methods: {
    onRegister(e) {
      e.preventDefault()

      this.form.validateFields(async (error, values) => {
        if (!error) {
          this.loading = true
          try {
            const CAN_LOGIN = await this.$store.dispatch('user/login', values)
            if (CAN_LOGIN) {
              this.$router.replace('/')
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

<style lang="scss" scoped>
.rigister-form {
  width: 100%;
  .rigister-input::v-deep {
    .ant-input {
      padding-left: 40px;
    }
  }
}
</style>
