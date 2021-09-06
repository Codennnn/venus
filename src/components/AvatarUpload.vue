<template>
  <div>
    <div class="flex items-end">
      <vue-cropper
        ref="cropper"
        style="width: 300px; height: 300px;"
        output-type="jpeg"
        mode="cover"
        :info="false"
        :output-size="0.8"
        :can-move="false"
        :can-move-box="true"
        :can-scale="true"
        :auto-crop="true"
        :center-box="true"
        :fixed="true"
        :info-true="true"
        :img="avatarBase64"
        @realTime="realTime"
      />

      <div
        v-if="showPreview"
        class="ml-8 text-center"
      >
        <div :style="previewStyle1">
          <div :style="previews.div">
            <img
              alt="头像预览"
              style="max-width: initial;"
              :style="previews.img"
              :src="previews.url"
            >
          </div>
        </div>
        <p class="mt-4 text-gray-600">
          250 X 250
        </p>
      </div>

      <div
        v-if="showPreview"
        class="ml-8 text-center"
      >
        <div :style="previewStyle2">
          <div :style="previews.div">
            <img
              alt="头像预览"
              style="max-width: initial;"
              :style="previews.img"
              :src="previews.url"
            >
          </div>
        </div>
        <p class="mt-4 text-gray-600">
          150 X 150
        </p>
      </div>
    </div>

    <div class="mt-6 flex items-center">
      <a-upload
        class="avatar-upload"
        accept="image/*"
        :show-upload-list="false"
        :before-upload="beforeUpload"
      >
        <a-button>选择图片</a-button>
      </a-upload>
      <a-button
        class="ml-4"
        type="primary"
        :disabled="!avatarInfo"
        :loading="uploading"
        @click="handleUpload"
      >
        {{ uploading ? '正在上传' : '开始上传' }}
      </a-button>
    </div>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'

import { uploadImage } from '@/api/common'

export default {
  name: 'AvatarUpload',

  components: { VueCropper },

  props: {
    preview: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    avatarInfo: null,
    avatarBase64: '',
    uploading: false,
    showPreview: false,
    previews: {},
    previewStyle1: null,
    previewStyle2: null,
  }),

  methods: {
    beforeUpload(file) {
      const isLt2M = (file.size < 2 * 1024 * 1024)

      if (isLt2M) {
        // 转为 base64 图片格式进行预览
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ({ target: { result } }) => {
          this.avatarInfo = file
          this.avatarBase64 = result
          if (this.preview) {
            this.showPreview = true
          }
        }
      } else {
        this.$message.error('图片大小不能超过 2MB！')
      }

      return false
    },

    realTime(data) {
      this.previews = data
      const previewStyle = {
        width: `${data.w}px`,
        height: `${data.h}px`,
        overflow: 'hidden',
        borderRadius: '9999px',
        boxShadow: '0 0 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      }
      this.previewStyle1 = {
        ...previewStyle, zoom: 250 / data.w,
      }
      this.previewStyle2 = {
        ...previewStyle, zoom: 150 / data.w,
      }
    },

    handleUpload() {
      this.uploading = true

      this.$refs.cropper.getCropBlob((blob) => {
        const formData = new FormData()
        formData.append('avatar', blob, this.avatarInfo.avatar)
        uploadImage()
          .then(() => {
            this.$message.success('头像上传成功')
          })
          .finally(() => {
            this.uploading = false
          })
      })
    },
  },
}
</script>
