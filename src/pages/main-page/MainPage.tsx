import React, {useEffect, useState} from "react";
import styles from "./assets/MainPage.module.scss";
import MainPageArrowLeft from "../../icons/MainPageArrowLeft";
import MainPageArrowRight from "../../icons/MainPageArrowRight";

export default function MainPage() {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const setDimension = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', setDimension);
    }, [width])

    return(
        <div className={styles.container}>
            {width > 1000 ? <MainPageArrowLeft width={382} height={112}/> : <MainPageArrowRight width={434} height={147}/>}
        </div>
    );
}