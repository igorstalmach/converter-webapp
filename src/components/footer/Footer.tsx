import React from "react";
import styles from "./assets/Footer.module.scss";

export default function Footer() {
    return(
        <footer className={styles.container}>
            <div className={styles.text}>
                <a href={"https://github.com/igorstalmach"}>Igor Stalmach</a>, 2023
            </div>
        </footer>
    );
}