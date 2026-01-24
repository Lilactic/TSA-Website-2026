import React from 'react';
import styles from './bentoBoard.module.css';
import library from '../assets/images/library.png';

const bentoBoard: React.FC = () => {
return (
<>
<h1 className={styles.bentoBoardTitle}>Gallery</h1>
    <div className={styles.bentoBoardContainer}>
        <div className={`${styles.bentoCard} ${styles.a}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.b}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.c}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.d}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.e}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.f}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.g}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.h}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.i}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
        <div className={`${styles.bentoCard} ${styles.j}`}>
            <img src={library} alt="Friendswood Library" className={styles.bentoImage}/>
        </div>
    </div>
</>
);
}

export default bentoBoard;