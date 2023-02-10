import React from "react";
import styles from "./assets/NavBar.module.scss";
import {Link} from "react-router-dom";

export default function NavBar() {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                What _ _ _ _ is it?
            </div>
            <div className={styles.nav}>
                <Link to={'/time'} className={styles.navItems}>Time</Link>
                <Link to={'/currency'} className={styles.navItems}>Currency</Link>
                <Link to={'/temperature'} className={styles.navItems}>Temperature</Link>
            </div>
        </div>
    );
}