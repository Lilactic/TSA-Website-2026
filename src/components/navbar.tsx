import '../global.css'
import styles from './navbar.module.css'

function Navbar() {
  return (
    <header>
      <h2 className={styles.homeLink}>Friendswood Resources</h2>
      <div className={styles.navigation}>
        <h3 className={`interSubtitle ${styles.navigationLink}`}>Resources</h3>
        <h3 className={`interSubtitle ${styles.navigationLink}`}>Events</h3>
        <h3 className={`interSubtitle ${styles.navigationLink}`}>Contact Us</h3>
      </div>
    </header>
  )
}

export default Navbar;
