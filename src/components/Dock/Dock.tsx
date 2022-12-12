import styles from './dock.module.css';
import finder from '../../../assets/dockIcons/Finder.png';
import safari from '../../../assets/dockIcons/Safari.png';
import messages from '../../../assets/dockIcons/Messages.png';

function Dock() {
  const dockValues = [
    { name: 'Finder', value: finder },
    { name: 'Safari', value: safari },
    { name: 'Messages', value: messages },
  ];

  return (
    <article className={styles.container}>
      {/* CREATE LINK TO ICONS8 WEBSITE IN DESKTOP ICONS */}
      {dockValues.map((v) => (
        <div className={styles['icon-container']} key={v.name}>
          <img src={v.value} alt="" className={styles['icon-img']} />
          <span className={styles['tool-tip']}>{v.name}</span>
        </div>
      ))}
    </article>
  );
}

export default Dock;
