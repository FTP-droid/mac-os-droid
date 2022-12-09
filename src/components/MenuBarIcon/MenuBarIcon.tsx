import { useState } from 'react';
import styles from './menuBarIcon.module.css';

function MenuBarIcon({
  containerClass,
  icon,
  iconWhite,
  imgClass,
  imgId,
}: {
  containerClass: string;
  icon: string;
  iconWhite: string;
  imgClass: string;
  imgId: string;
}) {
  const [currentIcon, setCurrentIcon] = useState(icon);

  return (
    <div
      className={styles[containerClass]}
      onMouseOver={() => {
        setCurrentIcon(iconWhite);
      }}
      onFocus={() => {
        setCurrentIcon(iconWhite);
      }}
      onMouseOut={() => {
        setCurrentIcon(icon);
      }}
      onBlur={() => {
        setCurrentIcon(icon);
      }}
    >
      <img
        src={currentIcon}
        alt=""
        className={styles[imgClass]}
        id={styles[imgId]}
      />
      <div className={styles.dropdown}>
        <button type="button" className={styles['dropdown-btn']}>
          About this Mac
        </button>
        <hr />
        <button type="button" className={styles['dropdown-btn']}>
          System Preferences
        </button>
        <button type="button" className={styles['dropdown-btn']}>
          Location
        </button>
        <button type="button" className={styles['dropdown-btn']}>
          App Store
        </button>
        <hr />
        <button type="button" className={styles['dropdown-btn']}>
          Recent Items
        </button>
        <hr />
        <button type="button" className={styles['dropdown-btn']}>
          Force Quit...
        </button>
        <hr />
        <button type="button" className={styles['dropdown-btn']}>
          Sleep
        </button>
        <button type="button" className={styles['dropdown-btn']}>
          Restart...
        </button>
        <button type="button" className={styles['dropdown-btn']}>
          Shut Down...
        </button>
        <hr />
        <button type="button" className={styles['dropdown-btn']}>
          Lock Screen
        </button>
        <button type="button" className={styles['dropdown-btn']}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default MenuBarIcon;
