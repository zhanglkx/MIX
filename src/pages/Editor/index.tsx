import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

// 导入中文语言包
import '@ckeditor/ckeditor5-build-classic/build/translations/zh-cn';

const Editor = () => {
  const editorConfig = {
    // 设置语言为中文
    language: 'zh-cn',
    // 其他配置项
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'imageUpload',
      'blockQuote',
      'insertTable',
      'undo',
      'redo',
    ],
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      config={editorConfig}
      data="<p>开始编辑...</p>"
      onReady={(editor) => {
        console.log('编辑器就绪', editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log('数据变化:', data, event, editor);
      }}
      onBlur={(event, editor) => {
        console.log('失去焦点', event, editor);
      }}
      onFocus={(event, editor) => {
        console.log('获得焦点', event, editor);
        console.log(editor.id);
      }}
    />
  );
};

export default Editor;
