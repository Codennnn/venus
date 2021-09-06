<template>
  <div>
    <div class="section-card mb-6 p-0">
      <div class="mb-4 px-6 pt-6">
        <h3 class="section-card__title">Snow 主题</h3>
        <p>Snow 是基于简洁且扁平工具栏的主题</p>
      </div>
      <quill-editor v-model="snowContent" class="snow-theme" :options="editOptions" />
    </div>

    <div class="section-card">
      <h3 class="section-card__title">Bubble 主题</h3>
      <p>Bubble 是一个简单的基于 tooltip 气泡的主题。</p>
      <quill-editor
        v-model="bubbleContent"
        class="bubble-theme"
        :options="{
          theme: 'bubble',
          placeholder: '输入文本内容...',
          modules: {
            toolbar: [['bold', 'italic', 'underline', 'clean']],
          },
        }"
      />
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { Quill, quillEditor } from 'vue-quill-editor'

const Font = Quill.import('formats/font')
Font.whitelist = ['微软雅黑', '黑体', '宋体', 'Arial', 'serif', 'sans-serif']
Quill.register(Font, true)

export default {
  name: 'Quill',

  components: { quillEditor },

  data() {
    const snowContent =
      '<p class="ql-align-center"><img src="http://ww1.sinaimg.cn/large/775017f8gy1gfo4c5pcjij201k01ka9x.jpg"></p><p class="ql-align-center"><br></p><h1 class="ql-align-center">Quill 富文本编辑器</h1><p class="ql-align-center"><br></p><p class="ql-indent-1">Quill是一个所见即所得的富文本编辑器，拥有很好的交互体验，目前在github上的星数是编辑器中最高的。用户可以在基础上进行自定义的开发，来完成自己的编辑器功能。Vue-Quill-Editor 是基于&nbsp;Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。</p><p><br></p><p><span class="ql-size-large">使用方式</span></p><p>全局注册组件</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span><br> <span class="hljs-keyword">import</span> VueQuillEditor <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue-quill-editor\'</span><br> <span class="hljs-keyword">import</span> <span class="hljs-string">\'quill/dist/quill.core.css\'</span> <span class="hljs-comment">// 导入编辑器样式</span><br> <span class="hljs-keyword">import</span> <span class="hljs-string">\'quill/dist/quill.snow.css\'</span> <span class="hljs-comment">// 导入 snow 主题样式</span> <span class="hljs-comment"><br>// 或者</span><br> <span class="hljs-comment">// import \'quill/dist/quill.bubble.css\' // bubble 主题</span><br> Vue.use(VueQuillEditor, <span class="hljs-comment">/* { default global options } */</span>) </pre><p><br></p><p>单文件组件内使用</p><pre class="ql-syntax" spellcheck="false">import <span class="hljs-string">\'quill/dist/quill.core.css\'</span><br>import <span class="hljs-string">\'quill/dist/quill.snow.css\'</span> <br>import <span class="hljs-string">\'quill/dist/quill.bubble.css\'</span><br>import { quillEditor } <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue-quill-editor\'</span><br><br>export<span class="hljs-built_in"> default </span>{<br>  components: {<br>    quillEditor<br>  }<br>}</pre>'
    const bubbleContent = '选中这段演示文字，查看如何使用<strong> tooltip </strong>修改内容样式~😀'
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],

      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],

      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],
      [{ font: ['微软雅黑', '黑体', '宋体', 'Arial', 'serif', 'sans-serif'] }],
      [{ align: [] }],

      ['clean', 'image'],
    ]
    return {
      snowContent,
      bubbleContent,
      editOptions: {
        readOnly: true,
        placeholder: '输入文本内容...',
        modules: {
          syntax: {
            highlight: (text) => hljs.highlightAuto(text).value,
          },
          toolbar: toolbarOptions,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.quill-editor.snow-theme::v-deep {
  border: none;
  .ql-toolbar {
    @apply py-4 border-none;

    box-shadow: $header-shadow;
    .ql-font {
      span[data-value='微软雅黑']::before {
        font-family: '微软雅黑';
        content: '微软雅黑' !important;
      }
      span[data-value='黑体']::before {
        font-family: '黑体';
        content: '黑体' !important;
      }
      span[data-value='宋体']::before {
        font-family: '宋体';
        content: '宋体' !important;
      }
      span[data-value='Arial']::before {
        font-family: 'Arial';
        content: 'Arial' !important;
      }
    }
  }
  .ql-container {
    @apply py-4 text-base border-none;
    .ql-editor {
      min-height: 600px;
      .ql-syntax {
        padding: 1rem;
        color: $secondary;
        background: rgba(var(--secondary-light), 0.5);
      }
      .ql-align-center img {
        margin: 0 auto;
      }
      .ql-indent-1:not(.ql-direction-rtl) {
        padding: 0;
        text-indent: 2em;
      }
      .ql-font-Arial {
        font-family: 'Arial';
      }
      .ql-font-宋体 {
        font-family: '宋体';
      }
      .ql-font-黑体 {
        font-family: '黑体';
      }
      .ql-font-微软雅黑 {
        font-family: '微软雅黑';
      }
    }
  }
}

.quill-editor.bubble-theme::v-deep {
  @apply mt-4 rounded;
  .ql-editor {
    @apply text-base bg-gray-100;

    min-height: 100px;
  }
}
</style>
