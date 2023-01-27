import styles from './logIn.module.css';
import avatar from '../../../assets/avatar.jpg';

function LogIn() {
  return (
    <div className={styles.container}>
      <div className={styles['right-menu']}>Right Icons</div>
      <div className={styles['log-in-center']}>
        <img src={avatar} alt="" className={styles['avatar-img']} />
        <div className={styles.name}>Mary Appleseed</div>
        <input
          type="password"
          placeholder="Enter Password"
          className={styles.password}
        />
      </div>
      <div>BUttons</div>
    </div>
  );
}

export default LogIn;
