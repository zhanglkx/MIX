// TabComponent.tsx
import React, { useRef, useState } from 'react';

import { useMount } from 'ahooks';
import { Spin } from 'antd';
import styles from './component.less';
// types.ts
export interface Tab {
  id: string;
  label: string;
}

export interface ListItem {
  id: string;
  title: string;
  image: string;
  count?: number;
}

interface TabContentProps {
  items: ListItem[];
  isActive: boolean;
  hidden?: boolean;
}

const TabContent: React.FC<TabContentProps> = ({ items, isActive, hidden }) => {
  const [loading, setLoading] = useState(false);

  useMount(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  });

  return (
    <Spin delay={500} className={styles.contentWrapper} spinning={loading}>
      <div hidden={hidden} className={`${isActive ? styles.active : ''}`}>
        {items.map((item) => (
          <div key={item.id} className={styles.listItem}>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} />
            </div>
            <div className={styles.itemInfo}>
              <span className={styles.title}>{item.title}</span>
              {item.count !== undefined && (
                <span className={styles.count}>{item.count}</span>
              )}
              <span className={styles.arrow}>›</span>
            </div>
          </div>
        ))}
      </div>
    </Spin>
  );
};

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs: Tab[] = [
    { id: '1', label: '精选案例' },
    { id: '2', label: '设备巡检' },
    { id: '3', label: '消防安全' },
    { id: '4', label: '产品介绍' },
  ];

  const contentData: Record<number, ListItem[]> = {
    0: [
      { id: '1', title: '产品详情介绍', image: '/images/product1.png' },
      { id: '2', title: '巡逻巡更', image: '/images/patrol.png' },
      { id: '3', title: '人员实名信息', image: '/images/person.png' },
    ],
    1: [
      {
        id: '4',
        title: '设备检查记录',
        image: '/images/device1.png',
        count: 12,
      },
      {
        id: '5',
        title: '维修保养记录',
        image: '/images/maintenance.png',
        count: 8,
      },
    ],
    2: [
      { id: '6', title: '消防设施巡检', image: '/images/fire1.png' },
      { id: '7', title: '应急预案管理', image: '/images/emergency.png' },
    ],
    3: [
      { id: '8', title: '产品功能说明', image: '/images/feature.png' },
      { id: '9', title: '使用手册下载', image: '/images/manual.png' },
    ],
  };

  const scrollToTab = (index: number) => {
    const container = containerRef.current;
    const items = container?.getElementsByClassName(styles.tabItem);
    if (!container || !items) return;

    const item = items[index] as HTMLElement;
    const containerWidth = container.offsetWidth;
    const itemWidth = item.offsetWidth;
    const itemLeft = item.offsetLeft;

    const scrollLeft = itemLeft - (containerWidth - itemWidth) / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    scrollToTab(index);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.tabContainer} ref={containerRef}>
        <div className={styles.tabList}>
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`${styles.tabItem} ${
                activeTab === index ? styles.activeTab : ''
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        {Object.entries(contentData).map(([index, items]) => (
          <TabContent
            key={index}
            items={items}
            hidden={activeTab !== Number(index)}
            isActive={activeTab === Number(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
