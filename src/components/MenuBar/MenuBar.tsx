import { useState } from 'react';
import MenuBarIcon from 'components/MenuBarIcon/MenuBarIcon';
import MenuBarText from 'components/MenuBarText/MenuBarText';
import styles from './menuBar.module.css';
import appleIcon from '../../menuBarIcons/apple.svg';
import appleIconWhite from '../../menuBarIcons/appleW.png';
import batteryIcon from '../../menuBarIcons/battery.svg';
import batteryIconWhite from '../../menuBarIcons/batteryW.svg';
import wifiIcon from '../../menuBarIcons/wifi.svg';
import wifiIconWhite from '../../menuBarIcons/wifiW.svg';
import searchIcon from '../../menuBarIcons/search.svg';
import searchIconWhite from '../../menuBarIcons/searchW.svg';
import { all, textValues } from '../../staticValues/menuBarTextValues';
import {
  appleDropDownValues,
  allIconDropDownValues,
} from '../../staticValues/menuBarIconValues';

function MenuBar() {
  const [date, setDate] = useState(new Date());
  setInterval(() => setDate(new Date()), 60000);
  const day = date.getDay();
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const rightIcons = [
    {
      id: 'battery',
      icon: batteryIcon,
      iconWhite: batteryIconWhite,
    },
    {
      id: '',
      icon: wifiIcon,
      iconWhite: wifiIconWhite,
    },
    {
      id: 'search',
      icon: searchIcon,
      iconWhite: searchIconWhite,
    },
  ];

  return (
    <div className={styles.main}>
      <section className={styles.left}>
        <MenuBarIcon
          containerClass="apple-container"
          icon={appleIcon}
          iconWhite={appleIconWhite}
          imgClass="apple"
          imgId=""
          dropDownValues={appleDropDownValues}
        />
        {textValues.map((v, i) => (
          <MenuBarText text={v} dropDownValues={all[i]} key={v} />
        ))}
      </section>
      <section className={styles.right}>
        {rightIcons.map((v, i) => (
          <MenuBarIcon
            containerClass="right-icon-container"
            icon={v.icon}
            iconWhite={v.iconWhite}
            imgClass="right-child"
            imgId={v.id}
            key={v.icon}
            dropDownValues={allIconDropDownValues[i]}
          />
        ))}
        <MenuBarText
          text={`${dayList[day]} ${hours % 12}:${minutes} ${
            hours > 12 ? 'PM' : 'AM'
          }`}
          dropDownValues={all[all.length - 1]}
        />
      </section>
    </div>
  );
}

export default MenuBar;
