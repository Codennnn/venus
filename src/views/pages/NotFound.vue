<template>
  <a-result
    status="404"
    title="你所访问的页面不存在！"
    sub-title="资源不存在或者没有访问权限"
  >
    <template #extra>
      <a-button
        type="primary"
        @click="$router.push('/')"
      >
        回到首页
      </a-button>
    </template>
  </a-result>
</template>
