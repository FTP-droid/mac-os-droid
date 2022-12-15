import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './window.module.css';

function Window() {
  return (
    <div className={styles.container} draggable="true">
      <div className={styles.header}>
        <div className={styles['button-container']}>
          <button type="button" className={styles.button} id={styles.close}>
            <span className={styles['button-child']}>x</span>
          </button>
          <button type="button" className={styles.button} id={styles.minimize}>
            <span className={styles['button-child']}>-</span>
          </button>
        </div>
      </div>
      <div>Content</div>
    </div>
  );
}

export default Window;
