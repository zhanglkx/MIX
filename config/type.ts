// types/route.d.ts
import { IRoute } from '@umijs/max';

// 扩展路由配置类型
export interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  name?: string;
  path: string;
  [key: string]: any;
}

export interface CustomRoute extends Omit<IRoute, 'absPath'> {
  name?: string;
  menuHeaderRender?: boolean;
  access?: string; // 权限配置
  icon?: string; // 菜单图标
  hideInMenu?: boolean; // 是否在菜单中隐藏
  hideChildrenInMenu?: boolean; // 是否隐藏子菜单
  headerRender?: boolean; // 是否显示顶栏
  footerRender?: boolean; // 是否显示页脚
  menuRender?: boolean; // 是否显示菜单
  layout?: boolean; // 是否使用布局
  routes?: CustomRoute[];
  wrappers?: string[];
  component?: string;
  absPath?: string;
  // 扩展其他自定义属性
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
    [key: string]: any;
  };
}
