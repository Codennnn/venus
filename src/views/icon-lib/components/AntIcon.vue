<template>
  <div>
    <a-icon
      v-for="({ type, theme = 'outlined', twoToneColor }) in icons"
      :key="type"
      class="mr-6 text-2xl"
      :type="type"
      :theme="theme"
      :two-tone-color="twoToneColor"
    />
  </div>
</template>

<script>
export default {
  name: 'AntIcon',

  data: () => ({
    icons: [
      { type: 'deployment-unit' },
      { type: 'cloud-upload' },
      { type: 'usergroup-delete' },
      { type: 'file-protect' },
      { type: 'smile', theme: 'twoTone' },
      { type: 'heart', theme: 'twoTone', twoToneColor: '#ff5b5c' },
      { type: 'check-circle', theme: 'twoTone', twoToneColor: '#39da8a' },
    ],
  }),
}
</script>
