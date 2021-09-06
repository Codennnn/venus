<template>
  <a-form :form="form">
    <a-form-item
      label="姓名"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input
        v-decorator="['username', { rules: [{ required: true, message: '请输入您的姓名' }] }]"
        placeholder="请输入您的姓名"
      />
    </a-form-item>
    <a-form-item
      label="社交昵称"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input
        v-decorator="[
          'nickname',
          { rules: [{ required: checkNick, message: '请输入您的社交昵称' }] },
        ]"
        placeholder="请输入您的社交昵称"
      />
    </a-form-item>
    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-checkbox :checked="checkNick" @change="handleCheckChange"> 将昵称设为必填 </a-checkbox>
    </a-form-item>
    <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
      <a-button type="primary" @click="handleCheck"> 点击校验 </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 15 },
}
const formTailLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 15, offset: 5 },
}
export default {
  name: 'DynamicRulesForm',

  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this, { name: 'dynamic_rule' }),
    }
  },

  methods: {
    handleCheck() {
      this.form.validateFields((err) => {
        if (!err) {
          console.info('success')
        }
      })
    },

    handleCheckChange(e) {
      this.checkNick = e.target.checked
      this.$nextTick(() => {
        this.form.validateFields(['nickname'], { force: true })
      })
    },
  },
}
</script>
