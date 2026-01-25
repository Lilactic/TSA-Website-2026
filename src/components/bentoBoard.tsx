import React from 'react';
import styles from './bentoBoard.module.css';
import library from '../assets/images/library.png';
import pitties1 from '../assets/images/pitties1.jpg'
import cyber3 from '../assets/images/cyber3.png'
import centennial from '../assets/images/centennial.jpg'
import anchorPoint from '../assets/images/anchorPoint.jpg'
import dogPark from '../assets/images/dogPark.jpg'
import treasureOfDreams from '../assets/images/treasureOfDreams.jpg'
import agape from '../assets/images/agape.jpg'
import inspira from '../assets/images/inspira.jpg'
import maryQueen from '../assets/images/maryQueen.jpg'

const bentoBoard: React.FC = () => {
return (
<>
<h1 className={styles.bentoBoardTitle}>Gallery</h1>
    <div className={styles.bentoBoardContainer}>
        <div className={`${styles.bentoCard} ${styles.a}`}>
            <img src={centennial} alt="Centennial Park" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.b}`}>
            <img src={maryQueen} alt="Mary Queen Food Pantry" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.c}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.d}`}>
            <img src={anchorPoint} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.e}`}>
            <img src={cyber3} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.f}`}>
            <img src={dogPark} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.g}`}>
            <img src={treasureOfDreams} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.h}`}>
            <img src={inspira} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.i}`}>
            <img src={pitties1} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.j}`}>
            <img src={agape} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
    </div>
</>
);
}

export default bentoBoard;