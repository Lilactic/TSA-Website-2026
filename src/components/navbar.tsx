import { Link } from "react-router-dom";
import { forwardRef, useState, useEffect } from "react";
import { ShipWheel, TentTree } from "lucide-react";
import "../global.css";
import styles from "./navbar.module.css";

interface NavbarProps {
  stacked?: boolean;
  shadowOnScroll?: boolean;
}

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(
  ({ stacked = false, shadowOnScroll = false }, ref) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      if (!shadowOnScroll) return;

      const handleScroll = () => {
        setScrolled(window.scrollY > 5);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [shadowOnScroll]);

    return (
      <>
        <header
          ref={ref}
          className={`${styles.navbar} 
          ${stacked ? styles.stacked : ""}
          ${(!shadowOnScroll || scrolled) ? styles.shadow : ""}`}
        >
          <Link className={`${styles.homeLinkBox} ${styles.link}`} to="/" style={{ paddingLeft: "0px" }}>
            <ShipWheel size={36} strokeWidth={2} style={{ marginRight: 12 }} className={styles.shipWheel}/>
            <h2 className={`bradfordHeader ${styles.homeLink}`}>
              Friendswood Resources
            </h2>
          </Link>

          <div className={styles.navigation}>
            <Link className={styles.link} to="/resources">
              <h3 className={`interSubtitle ${styles.navigationLink}`}>
                Resources
              </h3>
            </Link>
            <Link className={styles.link} to="/events">
              <h3 className={`interSubtitle ${styles.navigationLink}`}>
                Events
              </h3>
            </Link>
            <Link className={styles.link} to="/references">
              <h3 className={`interSubtitle ${styles.navigationLink}`}>
                References
              </h3>
            </Link>
            <Link className={styles.link} to="/contact-us">
              <h3 className={`interSubtitle ${styles.navigationLink}`}>
                Contact Us
              </h3>
            </Link>
          </div>

          <button
            className={styles.mobileNavButton}
            onClick={() => setMobileNavOpen(v => !v)}
          >
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

        <div
          className={styles.mobileNavWindow}
          style={{
            transform: `translateX(${mobileNavOpen ? "0%" : "-200%"})`,
          }}
        >
          <Link className={styles.mobileLink} to="/resources"><h3 className={`interSubtitle ${styles.navigationLink}`}>Resources</h3></Link>
          <Link className={styles.mobileLink} to="/events"><h3 className={`interSubtitle ${styles.navigationLink}`}>Events</h3></Link>
          <Link className={styles.mobileLink} to="/references"><h3 className={`interSubtitle ${styles.navigationLink}`}>References</h3></Link>
          <Link className={styles.mobileLink} to="/contact-us"><h3 className={`interSubtitle ${styles.navigationLink}`}>Contact Us</h3></Link>
        </div>
      </>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
