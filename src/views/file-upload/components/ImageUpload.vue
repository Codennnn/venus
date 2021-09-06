<template>
  <div>
    <p class="mb-4">上传文件为图片，可展示本地缩略图</p>
    <a-upload
      multiple
      name="file"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      accept="image/*"
      list-type="picture"
      :default-file-list="defaultFileList"
      :headers="headers"
      @change="handleChange"
    >
      <a-button>上传图片</a-button>
    </a-upload>
  </div>
</template>

<script>
export default {
  name: 'ImageUpload',

  data: () => ({
    headers: {
      authorization: 'authorization-text',
    },
    defaultFileList: [
      {
        uid: '-1',
        name: 'xxx.jpg',
        status: 'done',
        thumbUrl: 'https://gitee.com/chinesee/images/raw/master/img/img_012.jpg',
      },
      {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        thumbUrl: 'https://gitee.com/chinesee/images/raw/master/img/img_042.png',
      },
    ],
  }),

  methods: {
    handleChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`成功上传 ${info.file.name}`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} 上传失败`)
      }
    },
  },
}
</script>
