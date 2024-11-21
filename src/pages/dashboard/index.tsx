// ScrollableNav.tsx
import React, { useRef, useState } from 'react';
import styles from './index.less';

interface Tab {
  id: number;
  label: string;
  content: string | React.ReactNode;
}

const ScrollableNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs: Tab[] = [
    { id: 1, label: '标签1', content: '标签1的内容区域' },
    { id: 2, label: '标签2', content: '标签2的内容区域' },
    { id: 3, label: '标签3', content: '标签3的内容区域' },
    { id: 4, label: '标签4', content: '标签4的内容区域' },
    { id: 5, label: '标签5', content: '标签5的内容区域' },
    { id: 6, label: '标签6', content: '标签6的内容区域' },
    { id: 7, label: '标签7', content: '标签7的内容区域' },
    { id: 8, label: '标签8', content: '标签8的内容区域' },
    { id: 9, label: '标签9', content: '标签9的内容区域' },
    { id: 10, label: '标签10', content: '标签10的内容区域' },
    { id: 11, label: '标签11', content: '标签11的内容区域' },
    { id: 12, label: '标签12', content: '标签12的内容区域' },
    { id: 13, label: '标签13', content: '标签13的内容区域' },
    { id: 14, label: '标签14', content: '标签14的内容区域' },
  ];

  const scrollToCenter = (index: number) => {
    const container = containerRef.current;
    const items = container?.getElementsByClassName(styles.tabItem);
    if (!container || !items) return;

    const item = items[index] as HTMLElement;
    const containerWidth = container.offsetWidth;
    const itemWidth = item.offsetWidth;
    const itemLeft = item.offsetLeft;

    const scrollLeft = itemLeft - itemWidth - (containerWidth - itemWidth) / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    scrollToCenter(index);
  };

  return (
    <div className={styles.wrapper}>
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
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.content}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default ScrollableNav;
