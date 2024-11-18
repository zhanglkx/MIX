import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';

// 简化样式封面图
export const listStyleImg: string =
  'https://gstatic.clewm.net/caoliao-resource/240621/e3a4ea_a448e674.png';

// 卡片样式封面图
export const cardStyleImg: string =
  'https://gstatic.clewm.net/caoliao-resource/240621/e3a4ea_e02037b2.png';

// 卡片简化样式封面图
export const cardLiteStyleImg: string =
  'https://gstatic.clewm.net/caoliao-resource/240621/e3a4ea_ee6011a8.png';

// 简化样式封面图
export const simplifyStyleImg: string =
  'https://gstatic.clewm.net/caoliao-resource/241008/e3a4ea_d1838f68.png';

// 二维码默认图
export const qrcodeImg: string =
  'https://gstatic.clewm.net/caoliao-resource/240826/e3a4ea_47c58355.png';

// 文件夹默认图
export const dirImg: string =
  'https://gstatic.clewm.net/caoliao-resource/240910/e3a4ea_57516006.png';

// 排列样式 宫格样式
export const sortCardStyleImg: string =
  'https://gstatic.clewm.net/caoliao-resource/241105/e3a4ea_c6340ddf.png';

// 排列样式 列表样式
export const sortCellStyleImg: string =
  'https://gstatic.clewm.net/caoliao-resource/241105/e3a4ea_ce5a9262.png';

export const SUMMARY_CODE_EMPTY_ICON: string =
  'https://gstatic.clewm.net/caoliao-resource/240625/e3a4ea_854e92e0.png';

//案例效果列表样式
export const CASE_EFFECT_LIST: string =
  'https://gstatic.clewm.net/caoliao-resource/241115/e3a4ea_eea5482d.png';

//案例效果卡片样式
export const CASE_EFFECT_CARD: string =
  'https://gstatic.clewm.net/caoliao-resource/241115/e3a4ea_d385b078.png';

//案例效果小卡片样式
export const CASE_EFFECT_LITE: string =
  'https://gstatic.clewm.net/caoliao-resource/241115/e3a4ea_39e3215d.png';

//案例效果菜单样式
export const CASE_EFFECT_MENU: string =
  'https://gstatic.clewm.net/caoliao-resource/241115/e3a4ea_412c726e.png';

export const QR_IMG_LIST: string[] = [
  CASE_EFFECT_LIST,
  CASE_EFFECT_CARD,
  CASE_EFFECT_LITE,
  CASE_EFFECT_MENU,
];

export const IMG_LIST: string =
  'https://gstatic.clewm.net/caoliao-resource/241115/e3a4ea_c6d3b144.png';
export const IMG_CARD: string =
  'https://gstatic.clewm.net/caoliao-resource/241115/e3a4ea_c6d3b144.png';
export const IMG_LITE: string =
  'https://gstatic.clewm.net/caoliao-resource/241115/e3a4ea_c6d3b144.png';
export const IMG_MENU: string =
  'https://gstatic.clewm.net/caoliao-resource/241115/e3a4ea_c6d3b144.png';

export const IMG_ALL: string =
  'https://gstatic.clewm.net/caoliao-resource/241116/e3a4ea_e61430c3.png?x-oss-process=image/resize,w_1375/format,gif/quality,Q_80/interlace,1/auto-orient,1&quot;);';

export const SHOW_IMG_LIST: string[] = [IMG_LIST, IMG_CARD, IMG_LITE, IMG_MENU];

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        loading
        destroyOnClose
        wrapClassName={styles.caseModalContainer}
        className={styles.wrap}
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className={styles.caseEffect}>
          <div className={styles.mainContainer}>
            <div className={styles.title}>
              <span className={styles.scanCode}>扫码查看目录组件案例效果</span>
            </div>
            <div className={styles.caseQrcode}>
              {QR_IMG_LIST.map((item: string, index: number): JSX.Element => {
                return (
                  <div className={styles.caseQrcodeItem} key={index}>
                    <img className={styles.image} src={item} alt="qrcode" />
                    <span className={styles.scanCodeExperience}>扫码体验</span>
                  </div>
                );
              })}
            </div>
            <div className={styles.caseImg}>
              {/* {
                    SHOW_IMG_LIST.map((item: string, index: number): JSX.Element => {
                      return (
                        <div className={styles.imgWrap} key={index}>
                          <img className={styles.image} src={item} alt="qrcode" />
                        </div>
                      );
                    })
                  } */}

              <img className={styles.allImg} src={IMG_ALL} alt="" />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default App;
