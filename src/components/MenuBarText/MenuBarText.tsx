import styles from './menuBarText.module.css';

function MenuBarText({
  text,
  dropDownValues,
}: {
  text: string;
  dropDownValues: Array<string>;
}) {
  const style = text.includes(':')
    ? `${styles.dropdown} ${styles.right}`
    : styles.dropdown;
  return (
    <div className={styles.container}>
      <button type="button" className={styles.text}>
        {text === 'Finder' ? <b>{text}</b> : <span>{text}</span>}
      </button>
      <div className={style}>
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

export default MenuBarText;
