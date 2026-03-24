import { useEffect, useState } from "react";
import StevensonPark from "../assets/images/stevensonPark.jpg"
import styles from "./parallax.module.css";

export default function Parallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.3);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.parallaxContainer}>
      <img
        src={StevensonPark}
        className={styles.parallaxImg}
        style={{ transform: `translateY(${offset}px)` }}
      />
    </div>
  );
}