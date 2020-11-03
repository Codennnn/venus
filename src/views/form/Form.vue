<template>
  <div>
    <div class="section-card mb-6">
      <search-form />
    </div>

    <div class="flex">
      <div class="w-1/2 pr-3">
        <div class="section-card">
          <h3 class="section-card__title text-xl">表单联动</h3>
          <p class="mb-6 text-gray-600">使用 setFieldsValue 来动态设置其他控件的值。</p>
          <linkage-form />
        </div>
      </div>

      <div class="w-1/2 pl-3">
        <div class="section-card">
          <h3 class="section-card__title text-xl">动态校验规则</h3>
          <p class="mb-6 text-gray-600">根据不同情况执行不同的校验规则。</p>
          <dynamic-rules-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import LinkageForm from './components/LinkageForm.vue'
import DynamicRulesForm from './components/DynamicRulesForm.vue'

export default {
  name: 'Form',
  components: {
    SearchForm,
    LinkageForm,
    DynamicRulesForm,
  },
}
</script>
