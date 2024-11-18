import React from 'react';
import { Outlet } from 'umi'; // 使用 Outlet 代替 props.children
import styles from './index.less';

// 定义 Layout 组件的 Props 类型
interface LayoutProps {
  // 如果需要传递其他 props，在这里定义
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className={styles.layoutContainer}>
      {/* 这里可以添加导航栏、侧边栏等公共组件 */}
      <nav className={styles.nav}>{/* 导航栏内容 */}</nav>

      <main className={styles.main}>
        <Outlet /> {/* 使用 Outlet 渲染子路由内容 */}
      </main>

      {/* 这里可以添加页脚等其他公共组件 */}
      <footer className={styles.footer}>{/* 页脚内容 */}</footer>
    </div>
  );
};

export default Layout;
