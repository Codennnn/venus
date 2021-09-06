<template>
  <div class="a" @click="$router.push('/skeleton')">123</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: true,
    }
  },
  methods: {},
}
</script>

<style>
.a {
  display: flex;
  transform: translateX(50px);
}
</style>
