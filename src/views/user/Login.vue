<template>
  <div class="flex flex-col items-center justify-center">
    <a-form
      class="login-form"
      :form="form"
      @submit="onLogin"
    >
      <a-form-item
        v-for="({ icon, decorator, size = 'large', placeholder, type = 'text' }, i) in formItems"
        :key="i"
      >
        <a-input
          class="login-input"
          :size="size"
          :type="type"
          :placeholder="placeholder"
          @keyup.enter="onLogin"
          @keyup.caps-lock="onSwitchCapture(i, $event)"
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
        <p
          v-if="i === 1 && showInputTooltip"
          class="flex items-center justify-end text-gray-500 text-sm"
        >
          <feather
            stroke="#fdac41"
            size="18"
            type="info"
            class="mr-1"
          />
          键盘大写已锁定
        </p>
      </a-form-item>
      <a-form-item style="margin: -15px 0 5px 0;">
        <div class="flex justify-between">
          <a-checkbox v-decorator="['rememberMe', { valuePropName: 'checked' }]">
            保持登录状态
          </a-checkbox>
          <span class="transition hover:primary cursor-pointer">忘记密码？</span>
        </div>
      </a-form-item>
      <a-form-item>
        <a-button
          class="w-full"
          size="large"
          type="primary"
          html-type="submit"
          :loading="loading"
        >
          立即登录
        </a-button>
      </a-form-item>
      <a-divider class="text-gray-500">或使用以下方式登录</a-divider>
      <div class="flex justify-center items-center">
        <img
          class="app-icon"
          v-for="({ src, alt }) in [
          { alt: 'wechat', src: require('@img/wechat.svg') },
          { alt: 'qq', src: require('@img/qq.svg') },
          { alt: 'gitee', src: require('@img/gitee.svg') },
        ]"
          :key="alt"
          :src="src"
          :alt="alt"
        >
      </div>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      formItems: [
        {
          icon: 'user',
          placeholder: '登录账号',
          decorator: [
            'username',
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
      ],
      form: this.$form.createForm(this),
      loading: false,
      showInputTooltip: false,
    }
  },

  mounted() {
    // MOCK: 模拟登录，页面加载时自动填写账号
    this.form.setFieldsValue({
      username: 'admin@magic.com',
      password: 'magic123456',
    })
  },

  methods: {
    onSwitchCapture(i, e) {
      const IS_CAPS_ON = e?.getModifierState('CapsLock') || false
      this.showInputTooltip = i === 1 && IS_CAPS_ON
    },

    onLogin(e) {
      e.preventDefault()

      this.form.validateFields(async (error, values) => {
        if (!error) {
          this.loading = true
          try {
            const CAN_LOGIN = await this.$store.dispatch('user/login', values)
            if (CAN_LOGIN) {
              const { redirectPath } = this.$store.state
              if (redirectPath) {
                // 通过记录重定向路径，前往授权前想要访问的页面
                this.$router.replace(redirectPath)
              } else {
                this.$router.replace('/')
              }
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
.login-form {
  width: 100%;
  .login-input::v-deep {
    .ant-input {
      padding-left: 40px;
    }
  }

  .app-icon {
    @apply mx-4 w-6 cursor-pointer;
    filter: grayscale(100%);
    transition: $transition;
    opacity: 0.8;
    &:hover {
      filter: none;
      opacity: 1;
    }
  }
}
</style>
