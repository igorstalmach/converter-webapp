import React from "react";
import styles from "./assets/TimeConverter.module.scss";
import TimeConverterLogo from "../../icons/TimeConverterLogo";
import Option from "./Option";
import { UTC, GMT, abbreviations } from "./assets/timeZoneValues";

export default function TimeConverter() {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <TimeConverterLogo width={705} height={129}/>
                </div>
                <div className={styles.content}>
                    <span className={styles.text}>
                        From
                    </span>
                    <div className={styles.inputBoxes}>
                        <input type="time" className={styles.smallInput}/>
                        <select className={styles.input}>
                          <optgroup label="Abbreviations">
                              {abbreviations.map(item => {
                                    return <Option value={item.value} label={item.label}/>
                              })}
                          </optgroup>
                          <optgroup label="Coordinated Universal Time">
                              {UTC.map(item => {
                                    return <Option value={item.value} label={item.label}/>
                              })}
                          </optgroup>
                          <optgroup label="Greenwich Mean Time">
                              {GMT.map(item => {
                                    return <Option value={item.value} label={item.label}/>
                              })}
                          </optgroup>
                        </select>
                    </div>
                    <span className={styles.text}>
                        To
                    </span>
                    <div className={styles.inputBoxes}>
                        <input type="time" className={styles.smallInput}/>
                        <select className={styles.input}>
                          <optgroup label="Abbreviations">
                              {abbreviations.map(item => {
                                    return <Option value={item.value} label={item.label}/>
                              })}
                          </optgroup>
                          <optgroup label="Coordinated Universal Time">
                              {UTC.map(item => {
                                    return <Option value={item.value} label={item.label}/>
                              })}
                          </optgroup>
                          <optgroup label="Greenwich Mean Time">
                              {GMT.map(item => {
                                    return <Option value={item.value} label={item.label}/>
                              })}
                          </optgroup>
                        </select>
                    </div>
                    <div className={styles.inputBoxes}>
                        <span className={styles.smallText}>
                            Hint: Your IP matches:
                        </span>
                    </div>
                    <span className={styles.textResult}>
                        Result
                    </span>
                    <div className={styles.inputBoxesResult}>
                        <span className={styles.box}>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}