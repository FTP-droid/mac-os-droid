import { useState } from 'react';
import styles from './menuBar.module.css';
import appleIcon from '../../../assets/apple.svg';
import appleIconWhite from '../../../assets/appleW.png';
import battery from '../../../assets/battery.svg';
import wifi from '../../../assets/wifi.svg';
import search from '../../../assets/search.svg';

const DAYLIST = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function MenuBar() {
  const [date, setDate] = useState(new Date());
  setInterval(() => setDate(new Date()), 60000);
  const day = date.getDay();
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  const [icon, setIcon] = useState(appleIcon);

  return (
    <div className={styles.main}>
      <section className={styles.left}>
        <div
          className={styles['apple-container']}
          onMouseOver={(e) => {
            setIcon(appleIconWhite);
          }}
          onFocus={(e) => {
            setIcon(appleIconWhite);
          }}
          onMouseOut={(e) => {
            setIcon(appleIcon);
          }}
          onBlur={(e) => {
            setIcon(appleIcon);
          }}
        >
          <img src={icon} alt="apple" className={styles.apple} />
        </div>

        <button type="button" className={styles['left-child']}>
          File
        </button>
        <button type="button" className={styles['left-child']}>
          Edit
        </button>
        <button type="button" className={styles['left-child']}>
          View
        </button>
        <button type="button" className={styles['left-child']}>
          Go
        </button>
        <button type="button" className={styles['left-child']}>
          Window
        </button>
        <button type="button" className={styles['left-child']}>
          Help
        </button>
      </section>
      <section className={styles.right}>
        <div className={styles['right-icon-container']}>
          <img src={battery} alt="" className={styles['right-child']} />
        </div>
        <div className={styles['right-icon-container']}>
          <img src={wifi} alt="" className={styles['right-child']} />
        </div>
        <div className={styles['right-icon-container']}>
          <img src={search} alt="" className={styles['right-child']} />
        </div>
        <button type="button" className={styles['date-btn']}>{`${
          DAYLIST[day]
        } ${hours % 12}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`}</button>
      </section>
    </div>
  );
}

export default MenuBar;
