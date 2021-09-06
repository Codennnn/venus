<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
    <a-form-item label="现在的时间">
      <a-select v-decorator="['nowTime']" placeholder="请选择一个时间" @change="handleSelectChange">
        <a-select-option value="morning"> 早上 </a-select-option>
        <a-select-option value="evening"> 晚上 </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="问候语">
      <a-input v-decorator="['greetings']" placeholder="这里会出现相应的问候语" />
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'LinkageForm',

  data() {
    return {
      form: this.$form.createForm(this),
    }
  },

  methods: {
    handleSelectChange(value) {
      this.form.setFieldsValue({
        greetings: `${value === 'morning' ? '早上好！老铁们' : '晚上好~该睡觉啦'}`,
      })
    },
  },
}
</script>
