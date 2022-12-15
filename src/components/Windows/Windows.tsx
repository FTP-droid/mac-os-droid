import Window from 'components/Window/Window';
import { DragEvent, useState } from 'react';
import styles from './windows.module.css';

function Windows() {
  const [offsetX, setOffsetX] = useState(150);
  const [offsetY, setOffsetY] = useState(150);
  const [styleLeft, setStyleLeft] = useState('');
  const [styleTop, setStyleTop] = useState('');

  const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setStyleLeft(`${e.clientX - offsetX}px`);
    setStyleTop(`${e.clientY - offsetY}px - 1.25rem`);
  };

  return (
    <div
      className={styles.container}
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <Window
        setOffsetX={setOffsetX}
        setOffsetY={setOffsetY}
        styleLeft={styleLeft}
        styleTop={styleTop}
      />
    </div>
  );
}

export default Windows;
