<template functional>
  <a-sub-menu
    v-if="props.menuInfo.meta"
    :key="props.menuInfo.meta.openKey"
    :disabled="props.menuInfo.disabled"
  >
    <template #title>
      <div class="flex items-center">
        <feather
          v-if="props.menuInfo.meta.icon"
          size="22"
          class="side-menu-icon anticon"
          :type="props.menuInfo.meta.icon"
        />
        <span>{{ props.menuInfo.meta.title }}</span>
      </div>
    </template>

    <template v-for="routeItem in props.menuInfo.children">
      <template v-if="!routeItem.children">
        <a-menu-item
          :key="routeItem.name"
          :disabled="routeItem.meta.disabled"
          @click="!routeItem.meta.disabled && props.routeTo(routeItem.path)"
        >
          <div class="flex items-center">
            <feather
              class="mr-4"
              size="10"
              stroke-width="3"
              type="minus"
            />
            <span>{{ routeItem.meta.title }}</span>
          </div>
        </a-menu-item>
      </template>

      <sub-menu
        v-else
        :key="routeItem.name"
        :menu-info="routeItem"
        :route-to="props.routeTo"
      />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  props: {
    menuInfo: {
      type: Object,
      required: true,
    },
    routeTo: {
      type: Function,
      required: true,
    },
  },
}
</script>
