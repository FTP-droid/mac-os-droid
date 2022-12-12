import { useState } from 'react';
import styles from './menuBarIcon.module.css';

function MenuBarIcon({
  containerClass,
  icon,
  iconWhite,
  imgClass,
  imgId,
  dropDownValues,
}: {
  containerClass: string;
  icon: string;
  iconWhite: string;
  imgClass: string;
  imgId: string;
  dropDownValues: Array<string>;
}) {
  const [currentIcon, setCurrentIcon] = useState(icon);
  const dropdownStyle =
    containerClass === 'right-icon-container'
      ? `${styles.dropdown} ${styles.right}`
      : styles.dropdown;

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
      {!(imgId === 'search') ? (
        <div className={dropdownStyle}>
          {dropDownValues.map((v) =>
            v.length === 1 ? (
              <hr key={v} />
            ) : (
              <button type="button" className={styles['dropdown-btn']} key={v}>
                {v}
              </button>
            )
          )}
        </div>
      ) : (
        <div className={styles['search-container']}>
          <input
            type="text"
            placeholder="Search"
            onMouseOut={(e) => {
              (e.target as HTMLInputElement).value = '';
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).value = '';
            }}
          />
        </div>
      )}
    </div>
  );
}

export default MenuBarIcon;
