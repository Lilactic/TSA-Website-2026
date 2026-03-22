import { useState, useEffect } from "react";
import { spotlightData } from "../data/slideshow";
import styles from './slideshow.module.css'
import { ArrowUpRight, ChevronRight, ChevronLeft} from "lucide-react";
import { Link } from 'react-router-dom';

const slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === spotlightData.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? spotlightData.length - 1 : prev - 1
    );
  };

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = spotlightData[currentIndex];

  return (
    <div className={styles.slideshowContainer}>
        <div className={styles.projectCardContainer}>
            <button className={styles.slideButton} onClick={prevSlide}><ChevronLeft size={36} strokeWidth={2}/></button>

            <div className={styles.projectCard}>
                <div className={styles.imageBox}>
                    <img 
                        src={current.image}
                        alt={current.name}
                        className={styles.cardImage}
                    />
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardHeaderGrid}>
                        <h2 className={styles.cardHeader}>{current.name}</h2>
                        <Link className={styles.link} to="/resources" style={{textDecoration: "none"}}>
                        <button className={styles.cardButton}><ArrowUpRight size={32} strokeWidth={2}/></button>
                        </Link>
                    </div>
                    <div className={styles.cardDescription}>
                        <p>{current.description}</p>
                    </div>
                </div>
            </div>

            <button className={styles.slideButton} onClick={nextSlide}><ChevronRight size={36} strokeWidth={2}/></button>
        </div>

        <div className={styles.dots}>
            {spotlightData.map((_, index) => (
                <span
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={index === currentIndex ? styles.active : ""}

                >
                ●
                </span>
            ))}
        </div>
    </div>
  );
}

export default slideshow;