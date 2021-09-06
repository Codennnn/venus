<template>
  <transition-group name="flip-list" :tag="tag">
    <slot />
  </transition-group>
</template>

<script>
export default {
  name: 'FlipList',
  props: {
    tag: {
      type: String,
      default: 'ul',
    },
  },
}
</script>

<style lang="scss">
.flip-list-item {
  transition: all 1s;
}
.flip-list-enter,
.flip-list-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
.flip-list-move {
  transition: transform 1s;
}
.flip-list-leave-active {
  position: absolute;
}
</style>
