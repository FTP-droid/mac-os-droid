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
    </div>
  );
}

export default MenuBarIcon;
