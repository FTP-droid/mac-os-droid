import { useState } from 'react';
import MenuBarIcon from 'components/MenuBarIcon/MenuBarIcon';
import styles from './menuBar.module.css';
import appleIcon from '../../../assets/apple.svg';
import appleIconWhite from '../../../assets/appleW.png';
import batteryIcon from '../../../assets/battery.svg';
import batteryIconWhite from '../../../assets/batteryW.svg';
import wifiIcon from '../../../assets/wifi.svg';
import wifiIconWhite from '../../../assets/wifiW.svg';
import searchIcon from '../../../assets/search.svg';
import searchIconWhite from '../../../assets/searchW.svg';

const DAYLIST = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function MenuBar() {
  const [date, setDate] = useState(new Date());
  setInterval(() => setDate(new Date()), 60000);
  const day = date.getDay();
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return (
    <div className={styles.main}>
      <section className={styles.left}>
        <MenuBarIcon
          containerClass="apple-container"
          icon={appleIcon}
          iconWhite={appleIconWhite}
          imgClass="apple"
          imgId=""
        />
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
        <MenuBarIcon
          containerClass="right-icon-container"
          icon={batteryIcon}
          iconWhite={batteryIconWhite}
          imgClass="right-child"
          imgId="battery"
        />
        <MenuBarIcon
          containerClass="right-icon-container"
          icon={wifiIcon}
          iconWhite={wifiIconWhite}
          imgClass="right-child"
          imgId=""
        />
        <MenuBarIcon
          containerClass="right-icon-container"
          icon={searchIcon}
          iconWhite={searchIconWhite}
          imgClass="right-child"
          imgId="search"
        />
        <button type="button" className={styles['date-btn']}>{`${
          DAYLIST[day]
        } ${hours % 12}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`}</button>
      </section>
    </div>
  );
}

export default MenuBar;
