// types.ts
interface Tab {
  id: string;
  label: string;
}

interface ListItem {
  id: string;
  title: string;
  image?: string;
  count?: number;
}

// TabComponent.tsx
import React, { useRef, useState } from 'react';
import styles from './component.less';

const IMG_URL =
  'https://gstatic.clewm.net/caoliao-resource/241008/e3a4ea_39a86844.png';

const TabComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 模拟标签数据
  const tabs: Tab[] = [
    { id: '1', label: '精选案例' },
    { id: '2', label: '设备巡检' },
    { id: '3', label: '消防安全' },
    { id: '4', label: '产品介绍' },
    { id: '5', label: '产品介绍' },
    { id: '6', label: '消防设施巡检' },
    { id: '7', label: '应急预案管理' },
    { id: '8', label: '产品功能说明' },
    { id: '9', label: '使用手册下载产品功能说明产品功能说明产品功能说明' },
  ];

  // 模拟不同标签对应的内容数据
  const contentData: Record<number, ListItem[]> = {
    0: [
      { id: '1', title: '产品详情介绍', image: IMG_URL },
      { id: '2', title: '巡逻巡更', image: IMG_URL },
      { id: '3', title: '人员实名信息', image: IMG_URL },
    ],
    1: [
      { id: '4', title: '设备检查记录', image: IMG_URL, count: 12 },
      { id: '5', title: '维修保养记录', image: IMG_URL, count: 8 },
    ],
    2: [
      { id: '6', title: '消防设施巡检', image: IMG_URL },
      { id: '7', title: '应急预案管理', image: IMG_URL },
    ],
    3: [
      { id: '8', title: '产品功能说明', image: IMG_URL },
      { id: '9', title: '使用手册下载', image: IMG_URL },
    ],
    4: [
      { id: '8', title: '产品功能说明', image: IMG_URL },
      { id: '9', title: '使用手册下载', image: IMG_URL },
    ],
    5: [
      { id: '8', title: '产品功能说明', image: IMG_URL },
      { id: '9', title: '使用手册下载', image: IMG_URL },
    ],
    6: [
      { id: '8', title: '产品功能说明', image: IMG_URL },
      { id: '9', title: '使用手册下载', image: IMG_URL },
    ],
    7: [
      { id: '8', title: '产品功能说明', image: IMG_URL },
      { id: '9', title: '使用手册下载', image: IMG_URL },
    ],
    8: [
      { id: '8', title: '产品功能说明', image: IMG_URL },
      { id: '9', title: '使用手册下载', image: IMG_URL },
    ],
    9: [
      { id: '8', title: '产品功能说明', image: IMG_URL },
      { id: '9', title: '使用手册下载', image: IMG_URL },
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
      <div className={styles.container} ref={containerRef}>
        <div className={styles.tabList}>
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              className={`${styles.tabItem} ${
                activeTab === index ? styles.activeTab : ''
              }`}
              onClick={() => handleTabClick(index)}
            >
              <span className={styles.title}> {tab.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        {contentData[activeTab]?.map((item) => (
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
    </div>
  );
};

export default TabComponent;
