import React, {useEffect} from "react";
import styles from "./assets/IPTemperatureLookUp.module.scss";
import axios from "axios";

interface ILocation {
    lat: number,
    lon: number
}

export default function IPTemperatureLookUp() {
    const [publicIP, setPublicIP] = React.useState<string>("");
    const [location, setLocation] = React.useState<ILocation>({
        lat: 0,
        lon: 0
    });
    const [temperature, setTemperature] = React.useState<number>(0);
    const [city, setCity] = React.useState<string>("");

    const getData = async () => {
        const ipResponse = await axios.get('https://geolocation-db.com/json/');
        setPublicIP(ipResponse.data.IPv4);

        const locationResponse = await axios.get('http://ip-api.com/json/' + publicIP + '?fields=lat,lon,city');
        setLocation({
            lat: locationResponse.data.lat,
            lon: locationResponse.data.lon
        });
        setCity(locationResponse.data.city);

        const weatherResponse = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=' + location.lat + '&longitude=' + location.lon + '&current_weather=true');
        setTemperature(weatherResponse.data.current_weather.temperature);
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <div className={styles.container}>
            Hint: Weather suggested for <span className={styles.text}>{city}</span> (detected by your IP): <span className={styles.text}>{temperature}°C</span>
        </div>
    );
}