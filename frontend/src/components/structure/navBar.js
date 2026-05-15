import { useState, useRef } from "react";
import ReactAudioPlayer from 'react-audio-player';
import "../style/navBar.css";

function NavBar({ lang, setLang, refs, bgmusic }) {
    const [audioBG, setAudioBG] = useState(false); // Default to false since browsers block autoplay
    const [menuOpen, setMenuOpen] = useState(false);
    const audioRef = useRef(null);

    const homeRef = refs[0];
    const timelineRef = refs[1];
    const projectDemoRef = refs[2];

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
        setMenuOpen(false);
    };

    const toggleAudio = () => {
        if (!audioBG) {
            audioRef.current.audioEl.current.play();
        } else {
            audioRef.current.audioEl.current.pause();
        }
        setAudioBG(!audioBG);
    };

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <nav className="topNav">
            <div className="brandAndToggle">
                <div className="brand">Portfolio</div>
                <button
                    className={`mobileToggle ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>

            <div className={`menuPanel ${menuOpen ? 'open' : ''}`}>
                <div className="navLinks">
                    <button onClick={() => scrollToSection(homeRef)}>{lang === "ENG" ? "Home" : "หน้าแรก"}</button>
                    <button onClick={() => scrollToSection(timelineRef)}>{lang === "ENG" ? "Timeline" : "ไทม์ไลน์"}</button>
                    <button onClick={() => scrollToSection(projectDemoRef)}>{lang === "ENG" ? "Projects" : "โปรเจกต์"}</button>
                </div>
                <div className="settings">
                    <button className='audioBg' onClick={toggleAudio}>
                        {lang === "ENG" ? "Music" : "เพลง"}: {!audioBG ? "OFF" : "ON"}
                    </button>
                    <button className="langBtn" onClick={() => setLang(lang === "ENG" ? "TH" : "ENG")}> {lang === "ENG" ? "ENG" : "TH"} </button>
                </div>
            </div>

            <ReactAudioPlayer
                ref={audioRef}
                src={bgmusic}
                loop={true}
                volume={0.2}
                autoPlay={true}
            />
        </nav>
    );
}

export default NavBar;
