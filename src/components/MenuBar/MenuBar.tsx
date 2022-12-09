import { useState } from 'react';
import MenuBarIcon from 'components/MenuBarIcon/MenuBarIcon';
import MenuBarText from 'components/MenuBarText/MenuBarText';
import styles from './menuBar.module.css';
import appleIcon from '../../../assets/apple.svg';
import appleIconWhite from '../../../assets/appleW.png';
import batteryIcon from '../../../assets/battery.svg';
import batteryIconWhite from '../../../assets/batteryW.svg';
import wifiIcon from '../../../assets/wifi.svg';
import wifiIconWhite from '../../../assets/wifiW.svg';
import searchIcon from '../../../assets/search.svg';
import searchIconWhite from '../../../assets/searchW.svg';
import { all, textValues } from '../../staticValues/menuBarTextValues';

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

  const appleDropDownValues = [
    'About this Mac',
    '1',
    'System Preferences',
    'Location',
    'App Store',
    '2',
    'Recent Items',
    '3',
    'Force Quit...',
    '4',
    'Sleep',
    'Restart...',
    'Shut Down...',
    '5',
    'Lock Screen',
    'Log Out',
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
          <MenuBarText text={v} dropDownValues={all[i]} />
        ))}
      </section>
      <section className={styles.right}>
        {rightIcons.map((i) => (
          <MenuBarIcon
            containerClass="right-icon-container"
            icon={i.icon}
            iconWhite={i.iconWhite}
            imgClass="right-child"
            imgId={i.id}
            key={i.icon}
            dropDownValues={[]}
          />
        ))}
        <button type="button" className={styles['date-btn']}>{`${
          dayList[day]
        } ${hours % 12}:${minutes} ${hours > 12 ? 'PM' : 'AM'}`}</button>
      </section>
    </div>
  );
}

export default MenuBar;
