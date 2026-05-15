import { useState, useRef } from "react";
import ReactAudioPlayer from 'react-audio-player';
import "../style/navBar.css";

function NavBar({ lang, setLang, refs, bgmusic }) {

    const [audioBG, setAudioBG] = useState(false); // Default to false since browsers block autoplay
    const audioRef = useRef(null);
    
    const homeRef = refs[0];
    const timelineRef = refs[1];
    const projectDemoRef = refs[2];

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    const toggleAudio = () => {
        if (!audioBG) {
            audioRef.current.audioEl.current.play();
        } else {
            audioRef.current.audioEl.current.pause();
        }
        setAudioBG(!audioBG);
    };

    return (
        <nav className="topNav">
            <div className="navLinks">
                <button onClick={() => scrollToSection(homeRef)}>{lang === "ENG" ? "Home" : "หน้าแรก"}</button>
                <button onClick={() => scrollToSection(timelineRef)}>{lang === "ENG" ? "Timeline" : "ไทม์ไลน์"}</button>
                <button onClick={() => scrollToSection(projectDemoRef)}>{lang === "ENG" ? "Projects" : "โปรเจกต์"}</button>
            </div>
            <div className="settings">
                <button className='audioBg' onClick={toggleAudio}> [Music! {!audioBG ? "🕨" : "🕪"}] </button>
                <button className="langBtn" onClick={() => setLang(lang === "ENG" ? "TH" : "ENG")}> {lang === "ENG" ? "ENG" : "TH"} </button>
                <ReactAudioPlayer
                    ref={audioRef}
                    src={bgmusic}
                    loop={true}
                    volume={0.2}
                    autoPlay={true}
                />
            </div>
        </nav>
    );
}

export default NavBar;