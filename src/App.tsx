import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TimeConverter from "./pages/time-converter/TimeConverter";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import styles from "./App.module.scss";

export default function App() {
    return (
        <BrowserRouter>
            <div className={styles.container}>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<TimeConverter/>}/>
                        <Route path="/time" element={<TimeConverter/>}/>
                    </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}
