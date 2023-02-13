import React, {useEffect} from "react";
import styles from "./assets/CurrencyConverter.module.scss"
import CurrencyConverterLogo from "../../../icons/CurrencyConverterLogo";
import {scss_classes} from "../../../global";
import CurrencySelectInput from "./utils/CurrencySelectInput";
import axios from "axios";

export default function CurrencyConverter() {
    const [result, setResult] = React.useState<number>(0);

    const getCurrencyRates = async (currencyFrom: string, currencyTo: string) => {
        let val: number = 0;
        await axios.get('https://open.er-api.com/v6/latest/' + currencyFrom).then(
            (response) => {
                for (let rate in response.data.rates) {
                    if (rate === currencyTo) {
                        val = response.data.rates[rate];
                    }
                }
            }
        );
        return val;
    }

    const convertCurrency = () => {
        const initialValue = parseInt(document.getElementsByTagName("input")[0].value);
        const currencyFrom = document.getElementsByTagName("select")[0].value;
        const currencyTo = document.getElementsByTagName("select")[1].value;

        getCurrencyRates(currencyFrom, currencyTo).then(
            (value) => {
                setResult(Math.round((initialValue * value) * 100) / 100);
            }
        );
    }

    useEffect(() => {
        document.title = 'Currency Converter';
    }, [])

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <CurrencyConverterLogo width={772} height={116}/>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.content}>
                        <span className={styles.text}>
                            From
                        </span>
                        <div className={styles.inputBoxes}>
                            <input type="number" className={styles.smallInput}/>
                            <CurrencySelectInput className={styles.smallInput}/>
                        </div>
                        <span className={styles.text}>
                            To
                        </span>
                        <div className={styles.inputBoxes}>
                            <CurrencySelectInput className={styles.smallInput}/>
                        </div>
                        <span className={styles.textResult}>
                            Result
                        </span>
                        <div className={styles.inputBoxesResult}>
                            <span className={styles.smallBox}>
                                {result}
                            </span>
                            <button className={scss_classes(styles.smallInput, styles.button)} onClick={() => convertCurrency()}>Convert</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}