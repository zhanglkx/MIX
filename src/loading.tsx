import { Spin } from 'antd';
import styles from './loading.less';

export default () => {
  return (
    <div className={styles.pageLoading}>
      <Spin size="large" fullscreen tip="别急别急，已经在加载了，加载中..." />
    </div>
  );
};
