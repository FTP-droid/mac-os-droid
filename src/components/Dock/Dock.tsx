import styles from './dock.module.css';
import finder from '../../../assets/dockIcons/Finder.png';
import safari from '../../../assets/dockIcons/Safari.png';
import messages from '../../../assets/dockIcons/Messages.png';
import mail from '../../../assets/dockIcons/Mail.png';
import maps from '../../../assets/dockIcons/Maps.png';
import photos from '../../../assets/dockIcons/Photos.png';
import videoCall from '../../../assets/dockIcons/VideoCall.png';
import book from '../../../assets/dockIcons/Book.png';
import calendar from '../../../assets/dockIcons/Calendar.png';
import contacts from '../../../assets/dockIcons/Contacts.png';
import notes from '../../../assets/dockIcons/Notes.png';
import tv from '../../../assets/dockIcons/Tv.png';
import music from '../../../assets/dockIcons/Music.png';
import podcast from '../../../assets/dockIcons/Podcast.png';
import appStore from '../../../assets/dockIcons/AppStore.png';
import settings from '../../../assets/dockIcons/Settings.png';
import folder from '../../../assets/dockIcons/Folder.png';
import trash from '../../../assets/dockIcons/Trash.png';

function Dock() {
  const dockValues = [
    { name: 'Finder', value: finder },
    { name: 'Safari', value: safari },
    { name: 'Messages', value: messages },
    { name: 'Mail', value: mail },
    { name: 'Maps', value: maps },
    { name: 'Photos', value: photos },
    { name: 'Video Call', value: videoCall },
    { name: 'Calendar', value: calendar },
    { name: 'Contacts', value: contacts },
    { name: 'Notes', value: notes },
    { name: 'Book', value: book },
    { name: 'Tv', value: tv },
    { name: 'Music', value: music },
    { name: 'Podcast', value: podcast },
    { name: 'App Store', value: appStore },
    { name: 'Settings', value: settings },
    { name: 'Folder', value: folder },
    { name: 'Trash', value: trash },
  ];

  return (
    <article className={styles.container}>
      {/* CREATE LINK TO ICONS8 WEBSITE IN DESKTOP ICONS */}
      {dockValues.map((v) => (
        <div className={styles['icon-container']} key={v.value}>
          <img src={v.value} alt="" className={styles['icon-img']} />
          <span className={styles['tool-tip']}>{v.name}</span>
        </div>
      ))}
    </article>
  );
}

export default Dock;
