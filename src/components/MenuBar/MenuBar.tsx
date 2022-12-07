import styles from './menuBar.module.css';

function MenuBar() {
  return (
    <div className={styles.main}>
      <section>Left</section>
      <section>Right</section>
    </div>
  );
}

export default MenuBar;
