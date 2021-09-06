<template>
  <div>
    <div class="section-card mb-6">
      <h3 class="section-card__title">文件上传</h3>
      <div class="flex">
        <files-upload class="w-1/3 pr-3" />
        <image-upload class="w-1/3 px-3" />
        <photo-wall-upload class="w-1/3 pl-3" />
      </div>
    </div>

    <div class="section-card mb-6">
      <h3 class="section-card__title">头像上传</h3>
      <avatar-upload preview />
    </div>
  </div>
</template>

<script>
import AvatarUpload from '@comp/AvatarUpload.vue'
import FilesUpload from './components/FilesUpload.vue'
import ImageUpload from './components/ImageUpload.vue'
import PhotoWallUpload from './components/PhotoWallUpload.vue'

export default {
  name: 'FileUpload',
  components: {
    FilesUpload,
    ImageUpload,
    PhotoWallUpload,
    AvatarUpload,
  },
}
</script>
