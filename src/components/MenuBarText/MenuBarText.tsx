import styles from './menuBarText.module.css';

function MenuBarText({
  text,
  dropDownValues,
}: {
  text: string;
  dropDownValues: Array<string>;
}) {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.text}>
        {text}
      </button>
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

export default MenuBarText;
