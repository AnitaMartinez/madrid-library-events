"use client";

// import Image from "next/image";
// import styles from "./page.module.css";
import Header from './components/Header/Header';
import DistrictsSelect from './components/DistrictsSelect/DistrictsSelect';

export default function Home() {


    return (
        <div >
            <Header />
            <DistrictsSelect />
        </div>
    );
}
