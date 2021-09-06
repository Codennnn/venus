<template>
  <div class="clearfix">
    <p class="mb-4">
      用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失
    </p>

    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      :file-list="fileList"
      :remove="handleRemove"
      @preview="handlePreview"
      @change="handleChange"
    >
      <div v-if="fileList.length < 6">
        <a-icon type="plus" />
        <div class="mt-2">
          上传
        </div>
      </div>
    </a-upload>

    <a-modal
      centered
      width="95vw"
      :visible="previewVisible"
      :closable="false"
      :footer="null"
      @cancel="handleCancel"
    >
      <img
        alt="image"
        :src="previewImage"
      >
    </a-modal>
  </div>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
export default {
  name: 'PhotoWallUpload',

  data: () => ({
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://gitee.com/chinesee/images/raw/master/img/img_035.png',
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://gitee.com/chinesee/images/raw/master/img/img_036.png',
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: 'https://gitee.com/chinesee/images/raw/master/img/img_037.png',
      },
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://gitee.com/chinesee/images/raw/master/img/img_038.png',
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'done',
        url: 'https://gitee.com/chinesee/images/raw/master/img/img_027.png',
      },
    ],
  }),
  methods: {
    handleCancel() {
      this.previewVisible = false
    },

    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },

    handleChange({ fileList }) {
      this.fileList = fileList
    },

    handleRemove() {
      return new Promise((resolve, reject) => {
        this.$confirm({
          content: '确定删除该图片？',
          okText: '删除',
          cancelText: '点错了',
          okButtonProps: { props: { type: 'danger' } },
          onOk() {
            resolve()
          },
          onCancel() {
            reject()
          },
        })
      })
    },
  },
}
</script>
