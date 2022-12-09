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

function MenuBar() {
  const [date, setDate] = useState(new Date());
  setInterval(() => setDate(new Date()), 60000);
  const day = date.getDay();
  const hours = date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const leftIcons = ['File', 'Edit', 'View', 'Go', 'Window', 'Help'];

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

  const fileDropDownValues = [
    'New Finder Window',
    'New Folder',
    'New Smart Folder',
    'New Burn Folder',
    'New Tab',
    'Open',
    'Open With',
    'Print',
    'Close Window',
    '7',
    'Find',
    '8',
    'Duplicate',
  ];

  const editDropDownValues = [
    'Undo',
    'Redo',
    '9',
    'Cut',
    'Copy',
    'Paste',
    'Select All',
    'a',
    'Show Clipboard',
    'b',
    'Start Dictation',
    'Emojis',
  ];

  const viewDropDownValues = [
    'as Icons',
    'as List',
    'as Columns',
    'as Cover Flow',
    'c',
    'Clean Up',
    'Clean Up By',
    'Sort By',
    'd',
    'Hide Tab Bar',
    'Hide Path Bar',
    'Hide Status Bar',
    'Hide Sidebar',
    'Hide Preview',
    'e',
    'Toolbar',
    'Customize Toolbar...',
    'f',
    'Show View Options',
    'g',
    'Enter Full Screen',
  ];

  const goDropDownValues = [
    'Back',
    'Forward',
    'Enclosing Folder',
    'h',
    'Recents',
    'Documents',
    'Desktop',
    'Downloads',
    'Home',
    'Computer',
    'AirDrop',
    'Network',
    'iCloudDrive',
    'Applications',
    'Utilities',
    'i',
    'Recent Folders',
    'j',
    'Go to Folder...',
    'Connect to Server...',
  ];

  const windowDropDownValues = [
    'Minimize',
    'Zoom',
    'Cycle Through Windows',
    'k',
    'Show Previous Tab',
    'Show Next Tab',
    'Move Tab to New Window',
    'Merge All Windows',
    'l',
    'Bring All to Front',
  ];

  const helpDropDownValues = [
    'Search',
    'm',
    'Mac Help',
    'n',
    "See What's New in macOS",
    'New to Mac? Tour the Basics',
  ];

  const all = [
    fileDropDownValues,
    editDropDownValues,
    viewDropDownValues,
    goDropDownValues,
    windowDropDownValues,
    helpDropDownValues,
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
        {leftIcons.map((v, i) => (
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
