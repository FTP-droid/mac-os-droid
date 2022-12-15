import { DragEvent, useRef } from 'react';
import styles from './window.module.css';

function Window({
  setOffsetX,
  setOffsetY,
  styleLeft,
  styleTop,
}: {
  setOffsetX: (x: number) => void;
  setOffsetY: (y: number) => void;
  styleLeft: string;
  styleTop: string;
}) {
  const dummyRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    const rect = dummyRef?.current?.getBoundingClientRect();

    setOffsetX(e.clientX - (rect ? rect.x : 0));
    setOffsetY(e.clientY - (rect ? rect.y : 0));
  };

  return (
    <div
      className={styles.container}
      draggable="true"
      onDragStart={onDragStart}
      style={{ left: styleLeft, top: styleTop }}
    >
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
