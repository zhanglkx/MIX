import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, useNavigate } from '@umijs/max';
import { Button } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  const nav = useNavigate();

  const go = () => {
    nav('/editor');
  };

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <Button onClick={go} type="primary" size="small">
        前往编辑器
      </Button>
    </PageContainer>
  );
};

export default HomePage;
