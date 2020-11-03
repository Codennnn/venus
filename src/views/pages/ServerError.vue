<template>
  <a-result
    status="500"
    title="500"
    sub-title="抱歉，服务器异常..."
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
