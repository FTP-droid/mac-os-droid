import { useState } from 'react';
import styles from './menuBar.module.css';
import appleIcon from '../../../assets/apple.png';
import battery from '../../../assets/battery.svg';
import wifi from '../../../assets/wifi.svg';
import search from '../../../assets/search.svg';

function MenuBar() {
  const [current, setCurrent] = useState('');

  return (
    <div className={styles.main}>
      <section className={styles.left}>
        <img src={appleIcon} alt="apple" className={styles.apple} />
        {current && <div>{current}</div>}
        <div>File</div>
        <div>Edit</div>
        <div>View</div>
        <div>Go</div>
        <div>Window</div>
        <div>Help</div>
      </section>
      <section className={styles.right}>
        <img src={battery} alt="" />
        <img src={wifi} alt="" />
        <img src={search} alt="" />
      </section>
    </div>
  );
}

export default MenuBar;
