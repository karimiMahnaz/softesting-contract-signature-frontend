import React from "react";
import styles from '../styles/sofTestingLogo.module.scss';

const SofTestingLogo = () => {
    return(<>
                            <div className={styles.shape1} />
                            <div className={styles.shape2} />
                            <div className={styles.shape3} />
                            <div className={styles.shape4} />
                            <div className={styles.shape5} />
                            <div className={styles.shape6} />
                            <div className={styles.shape7} />

                            <h1 className={styles.logo}><strong>S</strong>of<strong>Testing</strong></h1>
                            <p className= {styles.description}>Software Design, Development & Testing</p>
    </> 
     )
 }
 export default SofTestingLogo;