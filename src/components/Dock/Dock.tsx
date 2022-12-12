import styles from './dock.module.css';
import finder from '../../../assets/dockIcons/Finder.png';

function Dock() {
  return (
    <div className={styles.container}>
      {/* CREATE LINK TO ICONS8 WEBSITE IN DESKTOP ICONS */}
      <div>
        <img src={finder} alt="" />
      </div>
    </div>
  );
}

export default Dock;
