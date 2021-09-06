<template>
  <div class="text-gray-600">
    <div class="section-card mb-6">
      <h3 class="section-card__title">
        主题默认颜色
      </h3>
      <p class="mb-2">
        Venus 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。<br>
        我们有一系列默认使用的颜色，它们为一下六种：
      </p>
      <ul>
        <li
          v-for="(color) in ['Primary', 'Secondary', 'Success', 'Warning', 'Danger', 'Info']"
          :key="color"
          class="flex items-center"
        >
          <feather
            class="mr-1"
            size="18"
            type="chevrons-right"
          />
          {{ color }}
        </li>
      </ul>
      <div class="mt-6 flex flex-wrap">
        <div
          v-for="(color) in ['primary', 'secondary', 'success', 'warning', 'danger', 'info']"
          :key="color"
          class="relative w-24 h-24 mr-10 rounded"
          :class="`bg-${color}`"
        >
          <span
            class="absolute text-white"
            style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
          >{{ color }}</span>
        </div>
      </div>
    </div>

    <div class="section-card">
      <h3 class="section-card__title">
        主题亮色
      </h3>
      <p class="mb-2">
        在默认主题颜色的基础上，我们增加了对应的亮色：
      </p>
      <ul>
        <li
          v-for="(color) in ['primary', 'secondary', 'success', 'warning', 'danger', 'info']"
          :key="color"
          class="mb-2 flex items-center"
        >
          <feather
            class="mr-1"
            size="18"
            type="chevrons-right"
          />
          <span
            style="padding: .15rem .3rem;"
            class="inline-block bg-gray-200 text-gray-600"
          >bg-{{ color }}-light</span>
        </li>
      </ul>
      <div class="mt-6 flex flex-wrap">
        <div
          v-for="(color) in ['primary', 'secondary', 'success', 'warning', 'danger', 'info']"
          :key="color"
          class="relative w-24 h-24 mr-10 rounded"
          :class="`bg-${color}-light`"
        >
          <span
            style="top: 50%; left: 50%; transform: translate(-50%, -50%);"
            class="absolute"
            :class="color"
          >{{ color }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Colors',
}
</script>
