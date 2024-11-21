import { useEffect, useRef } from 'react';
import style from './index.less';

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    // 正确的公共资源路径
    const script = document.createElement('script');
    script.src = '/ckeditor/ckeditor.js'; // 使用绝对路径

    script.onload = () => {
      // @ts-ignore
      const CKEDITOR = window.CKEDITOR;


      // 确保DOM元素已存在
      if (editorRef.current && CKEDITOR) {
        CKEDITOR.disableAutoInline = true;
        CKEDITOR.replace(editorRef.current);

        CKEDITOR.disableAutoInline = true;

        CKEDITOR.inline('editor1');
      }
    };

    script.onerror = (e) => {
      console.error('CKEditor 加载失败:', e);
    };

    document.body.appendChild(script);

    // 清理函数
    return () => {
      document.body.removeChild(script);
      // @ts-ignore
      if (window.CKEDITOR) {
        // @ts-ignore
        window.CKEDITOR.instances['editor1']?.destroy();
      }
    };
  }, []);

  return <>
    <div className={style.editor1} id="editor1" contentEditable="true">
    </div>
  </>
};

export default Editor;
