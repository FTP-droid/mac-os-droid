import { useState } from 'react';
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

  const [apple, setApple] = useState(appleIcon);
  const [battery, setBattery] = useState(batteryIcon);
  const [wifi, setWifi] = useState(wifiIcon);
  const [search, setSearch] = useState(searchIcon);

  return (
    <div className={styles.main}>
      <section className={styles.left}>
        <div
          className={styles['apple-container']}
          onMouseOver={() => {
            setApple(appleIconWhite);
          }}
          onFocus={() => {
            setApple(appleIconWhite);
          }}
          onMouseOut={() => {
            setApple(appleIcon);
          }}
          onBlur={() => {
            setApple(appleIcon);
          }}
        >
          <img src={apple} alt="apple" className={styles.apple} />
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
        <div
          className={styles['right-icon-container']}
          onMouseOver={() => {
            setBattery(batteryIconWhite);
          }}
          onFocus={() => {
            setBattery(batteryIconWhite);
          }}
          onMouseOut={() => {
            setBattery(batteryIcon);
          }}
          onBlur={() => {
            setBattery(batteryIcon);
          }}
        >
          <img
            src={battery}
            alt=""
            className={styles['right-child']}
            id={styles.battery}
          />
        </div>
        <div
          className={styles['right-icon-container']}
          onMouseOver={() => {
            setWifi(wifiIconWhite);
          }}
          onFocus={() => {
            setWifi(wifiIconWhite);
          }}
          onMouseOut={() => {
            setWifi(wifiIcon);
          }}
          onBlur={() => {
            setWifi(wifiIcon);
          }}
        >
          <img src={wifi} alt="" className={styles['right-child']} />
        </div>
        <div
          className={styles['right-icon-container']}
          onMouseOver={() => {
            setSearch(searchIconWhite);
          }}
          onFocus={() => {
            setSearch(searchIconWhite);
          }}
          onMouseOut={() => {
            setSearch(searchIcon);
          }}
          onBlur={() => {
            setSearch(searchIcon);
          }}
        >
          <img
            src={search}
            alt=""
            className={styles['right-child']}
            id={styles.search}
          />
        </div>
        <button type="button" className={styles['date-btn']}>{`${
          DAYLIST[day]
        } ${hours % 12}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`}</button>
      </section>
    </div>
  );
}

export default MenuBar;
