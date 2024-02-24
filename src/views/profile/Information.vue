<template>
  <div>
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
</template>

<script>
export default {
  name: 'Information',

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
          decorator: ['email', { initialValue: 'leokudev@gmail.com' }],
        },
        {
          label: '角色',
          placeholder: '请输入角色',
          decorator: ['role', { initialValue: '开发者' }],
        },
      ],
    }
  },
}
</script>
