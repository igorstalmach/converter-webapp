import React, {useEffect} from "react";
import styles from "./assets/TemperatureConverter.module.scss";
import {scss_classes} from "../../../global";
import TemperatureConverterLogo from "../../../icons/TemperatureConverterLogo";
import IPTemperatureLookUp from "./utils/IPTemperatureLookUp";
import TemperatureSelectInput from "./utils/TemperatureSelectInput";

export default function TemperatureConverter() {
    useEffect(() => {
        document.title = 'Temperature Converter';
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <TemperatureConverterLogo width={826} height={122}/>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        <span className={styles.text}>
                            From
                        </span>
                        <div className={styles.inputBoxes}>
                            <input type="number" className={styles.smallInput}/>
                            <TemperatureSelectInput className={styles.input}/>
                        </div>
                        <span className={styles.text}>
                            To
                        </span>
                        <div className={styles.inputBoxes}>
                            <TemperatureSelectInput className={styles.input}/>
                        </div>
                        <div className={styles.inputBoxes}>
                            <div className={styles.ipLookup}>
                                <IPTemperatureLookUp/>
                            </div>
                        </div>
                        <span className={styles.textResult}>
                            Result
                        </span>
                        <div className={styles.inputBoxesResult}>
                            <span className={styles.smallBox}>

                            </span>
                            <button className={scss_classes(styles.smallInput, styles.button)}>Convert</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}