"use client"

import Header from "./components/Header";
import Footer from "./components/Footer";
import dynamic from "next/dynamic";
import QuestionForm from "./components/QuestionForm";
import MapComponent from "./components/Map";

const Slider = dynamic(() => import('./components/Slider'), { ssr: false });


export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
       <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        backgroundImage: 'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>
        <Header/>
        <Slider/>
        </div>
        <MapComponent latitude={53.9006} longitude={27.5590} />
        <QuestionForm/>
        <Footer/>
    </div>
  );
}
