import styles from './index.less';

export default function Page() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <div>
      <div onClick={handleClick}>点击</div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
