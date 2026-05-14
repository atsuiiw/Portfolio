import './App.css';
import React, { useRef } from 'react';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

// import components
import FirstPage from './components/firstPage.js';
import SecondPage from './components/secondPage.js';
import WatchDemo from './components/watchDemo.js';
import backgroundPlaceholder from "./videos/preview-full-01.mp4";
import bgmusic from "./audios/Empty old City - Moonian.mp3"

function App() {
	const homeRef = useRef(null);
	const secondRef = useRef(null);
	const thirdRef = useRef(null);

	const [lang, setLang] = useState("ENG");
	const [audioBG, setAudioBG] = useState(false); // Default to false since browsers block autoplay
	const audioRef = useRef(null);

	const toggleAudio = () => {
		if (!audioBG) {
			audioRef.current.audioEl.current.play();
		} else {
			audioRef.current.audioEl.current.pause();
		}
		setAudioBG(!audioBG);
	};

	const scrollToSection = (elementRef) => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: 'smooth'
		});
	};

	return (
		<div className="App">
			{/* Background Video (Fixed) */}
			<video autoPlay loop muted playsInline type="video/mp4" className="backgroundVideo">
				<source src={backgroundPlaceholder} />
			</video>

			{/* Fixed Navigation Bar */}
			<nav className="topNav">
				<div className="navLinks">
					<button onClick={() => scrollToSection(homeRef)}>{lang === "ENG" ? "Home" : "หน้าแรก"}</button>
					<button onClick={() => scrollToSection(secondRef)}>{lang === "ENG" ? "Timeline" : "ไทม์ไลน์"}</button>
					<button onClick={() => scrollToSection(thirdRef)}>{lang === "ENG" ? "Third Page" : "หน้าสาม"}</button>
				</div>
				<div className="settings">
					<button className='audioBg' onClick={toggleAudio}> {!audioBG ? "🕨" : "🕪"} </button>
					<button className="langBtn" onClick={() => setLang(lang === "ENG" ? "TH" : "ENG")}> {lang === "ENG" ? "ENG" : "TH"} </button>
					<ReactAudioPlayer
						ref={audioRef}
						src={bgmusic}
						loop={true}
						volume={0.2}
					/>
				</div>
			</nav>

			{/* Page 1: Home */}
			<div ref={homeRef} className="pageSection homeSection">
				<FirstPage lang={lang} />
			</div>

			{/* Page 2: Second (White) */}
			<div ref={secondRef} className="pageSection secondSection">
				<SecondPage lang={lang} />
			</div>

			{/* Page 3: Third (Black) */}
			{/* <div ref={thirdRef} className="pageSection thirdSection">
				<h1>Third Page Placeholder</h1>
			</div> */}

			<WatchDemo />
		</div>
	);
}

export default App;
