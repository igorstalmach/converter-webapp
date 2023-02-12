import React, {useEffect} from "react";
import styles from "./assets/TimeConverter.module.scss";
import TimeConverterLogo from "../../icons/TimeConverterLogo";
import IPTimeZoneLookUp from "./IPTimeZoneLookUp";
import {scss_classes} from "../../global";
import TimeZoneSelectInput from "./TimeZoneSelectInput";

export default function TimeConverter() {
    const [resultTime, setResultTime] = React.useState<string>("");

    const convertTime = () => {
        const firstTimeZone = parseInt(document.getElementsByTagName("select")[0].value);
        const firstTime = document.getElementsByTagName("input")[0]?.value;
        const secondTimeZone = parseInt(document.getElementsByTagName("select")[1].value);

        if (firstTime === "") {
            return;
        }

        const firstTimeInMinutesSinceUTCZero = ((parseInt(firstTime.slice(0, 2)) * 60 + parseInt(firstTime.slice(3, 5))) - firstTimeZone) % 1440;
        let secondTimeInMinutesSinceUTCZero = (firstTimeInMinutesSinceUTCZero + secondTimeZone) % 1440;

        if (secondTimeInMinutesSinceUTCZero < 0) {
            secondTimeInMinutesSinceUTCZero = secondTimeInMinutesSinceUTCZero + 1440;
        }

        const hour = Math.trunc(secondTimeInMinutesSinceUTCZero / 60);

        if (hour < 10) {
            setResultTime("0" + Math.trunc(hour).toString() + ":" + (secondTimeInMinutesSinceUTCZero % 60).toString());
        } else {
            setResultTime(Math.trunc(hour).toString() + ":" + (secondTimeInMinutesSinceUTCZero % 60).toString());
        }
    }

    useEffect(() => {
        document.title = 'Time Zone Converter';
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <TimeConverterLogo width={705} height={129}/>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        <span className={styles.text}>
                            From
                        </span>
                        <div className={styles.inputBoxes}>
                            <input type="time" className={styles.smallInput}/>
                            <TimeZoneSelectInput className={styles.input}/>
                        </div>
                        <span className={styles.text}>
                            To
                        </span>
                        <div className={styles.inputBoxes}>
                            <TimeZoneSelectInput className={styles.input}/>
                        </div>
                        <div className={styles.inputBoxes}>
                            <div className={styles.ipLookup}>
                                <IPTimeZoneLookUp/>
                            </div>
                        </div>
                        <span className={styles.textResult}>
                            Result
                        </span>
                        <div className={styles.inputBoxesResult}>
                            <span className={styles.smallBox}>
                                {resultTime}
                            </span>
                            <button className={scss_classes(styles.smallInput, styles.button)} onClick={() => convertTime()}>Convert</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}