import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TimeConverter from "./pages/time-converter/TimeConverter";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import styles from "./App.module.scss";
import CurrencyConverter from "./pages/currency-converter/CurrencyConverter";
import MainPage from "./pages/main-page/MainPage";
import TemperatureConverter from "./pages/temperature-converter/TemperatureConverter";

export default function App() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/time" element={<TimeConverter/>}/>
                        <Route path="/currency" element={<CurrencyConverter/>}/>
                        <Route path="/temperature" element={<TemperatureConverter/>}/>
                    </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
