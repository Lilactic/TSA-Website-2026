import { Link } from 'react-router-dom';
import '../global.css'
import styles from './navbar.module.css'
import { TentTree, TreeDeciduous } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false); // false = closed, true = open

  const toggleMobileNav = () => {
    setMobileNavOpen(prev => !prev); // flip-flop the boolean
  };

  return (
    <>
      <header>
        <Link className={styles.link} to="/" style={{ paddingLeft: "0px" }}>
          <TentTree size={28} strokeWidth={2} style={{ marginRight: "12px", marginBottom: "1px" }} />
          <h2 className={`bradfordHeader ${styles.homeLink}`}>Friendswood Resources</h2>
        </Link>
        <div className={styles.navigation}>
          <Link className={styles.link} to="/resources"><h3 className={`interSubtitle ${styles.navigationLink}`}>Resources</h3></Link>
          <Link className={styles.link} to="/events"><h3 className={`interSubtitle ${styles.navigationLink}`}>Events</h3></Link>
          <Link className={styles.link} to="/references"><h3 className={`interSubtitle ${styles.navigationLink}`}>References</h3></Link>
          <Link className={styles.link} to="/contact-us"><h3 className={`interSubtitle ${styles.navigationLink}`}>Contact Us</h3></Link>
        </div>
        <button className={styles.mobileNavButton} onClick={toggleMobileNav}>
          <div
            className={`${styles.mobileNavButtonLine} ${
              mobileNavOpen && styles.line1Active
            }`}
          />
          <div
            className={`${styles.mobileNavButtonLine} ${
              mobileNavOpen && styles.line2Active
            }`}
          />
          <div
            className={`${styles.mobileNavButtonLine} ${styles.line3} ${
              mobileNavOpen && styles.line3Active
            }`}
          />
          <div
            className={`${styles.mobileNavButtonLine} ${styles.line4} ${
              mobileNavOpen && styles.line4Active
            }`}
          />
        </button>
      </header>
      <div className={styles.mobileNavWindow} style={{
          transform: `translateX(${mobileNavOpen ? "0%" : "-200%"})`
        }}>
          <Link className={styles.mobileLink} to="/resources"><h3 className={`interSubtitle ${styles.navigationLink}`}>Resources</h3></Link>
          <Link className={styles.mobileLink} to="/events"><h3 className={`interSubtitle ${styles.navigationLink}`}>Events</h3></Link>
          <Link className={styles.mobileLink} to="/references"><h3 className={`interSubtitle ${styles.navigationLink}`}>References</h3></Link>
          <Link className={styles.mobileLink} to="/contact-us"><h3 className={`interSubtitle ${styles.navigationLink}`}>Contact Us</h3></Link>
      </div>
    </>
  )
}

export default Navbar;
