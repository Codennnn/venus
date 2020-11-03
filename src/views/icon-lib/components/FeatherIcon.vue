<template>
  <div>
    <feather
      class="mr-6"
      v-for="({ type, stroke, fill, strokeWidth, size = 22 }) in icons"
      :key="type"
      :type="type"
      :size="size"
      :stroke="stroke"
      :fill="fill"
      :stroke-width="strokeWidth"
    />
  </div>
</template>

<script>
export default {
  name: 'FeatherIcon',

  data: () => ({
    icons: [
      { type: 'sliders' },
      { type: 'headphones' },
      { type: 'navigation' },
      { type: 'gitlab', size: 25 },
      { type: 'at-sign', size: 30 },
      { type: 'twitter', size: 35, strokeWidth: 1.6 },
      {
        type: 'thumbs-up', size: 40, stroke: '#fdac41', fill: 'rgba(253, 172, 65, .15)',
      },
    ],
  }),
}
</script>
