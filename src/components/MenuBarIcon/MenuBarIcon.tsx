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
    </div>
  );
}

export default MenuBarIcon;
