import StevensonPark from "../assets/images/parallaxImage.jpg"
import styles from "./parallax.module.css";

import { useEffect, useState, useRef } from "react";

export default function Parallax() {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const offset = rect.top * 0.3;

      setOffset(offset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={styles.parallaxContainer}>
      <img
        src={StevensonPark}
        className={styles.parallaxImg}
        style={{ transform: `translateY(calc(-50% + ${offset * 0.7}px))` }}
      />
    </div>
  );
}