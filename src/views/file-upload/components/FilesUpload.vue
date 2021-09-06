<template>
  <div>
    <p class="mb-4">经典款式，用户点击按钮弹出文件选择框</p>
    <a-upload
      multiple
      name="file"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :default-file-list="defaultFileList"
      :headers="headers"
      @change="handleChange"
    >
      <a-button>上传文件</a-button>
    </a-upload>
  </div>
</template>

<script>
export default {
  name: 'FilesUpload',

  data: () => ({
    headers: {
      authorization: 'authorization-text',
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: '上传失败', // 自定义要显示的错误信息
        url: 'http://www.baidu.com/zzz.png',
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
