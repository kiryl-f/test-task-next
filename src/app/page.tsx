"use client"

import Header from "./components/Header";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import QuestionForm from "./components/QuestionForm";
import MapComponent from "./components/Map";

import styles from './styles/Home.module.scss';
import { useEffect, useState } from "react";
import MobileCarousel from "./components/MobileCarousel";
import MobileInfo from "./components/MobileInfo";

const Slider = dynamic(() => import('./components/Slider'), { ssr: false });

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
     <div className={styles.homeBackground}> 
        <Header />
        {isMobile ? <MobileInfo/> : <></>}
        {isMobile ? <MobileCarousel/> :  <Slider />}
      </div>
      <MapComponent latitude={53.9006} longitude={27.5590} />
      <QuestionForm/>
      <Footer/>
    </div>
  );
}

