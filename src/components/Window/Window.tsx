import styles from './window.module.css';

function Window() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles['button-container']}>
          <button type="button" className={styles.button} id={styles.close}>
            x
          </button>
          <button type="button" className={styles.button} id={styles.minimize}>
            -
          </button>
        </div>
      </div>
      <div>Content</div>
    </div>
  );
}

export default Window;
