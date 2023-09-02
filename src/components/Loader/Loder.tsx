import React from 'react';
import styles from './Loder.module.css';
import loadingBar from '../../assets/loading.svg';

const Loader = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.LoadingContainer}>
                <img src={loadingBar} alt='loadingBar'/>
                <div className={styles.Title}>
                    Loading...
                </div>
            </div>
        </div>
    );
}

export default Loader;