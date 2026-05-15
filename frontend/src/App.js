import './App.css';
import { useRef } from 'react';
import { useState } from 'react';

// import components
import HomePage from './components/structure/homePage.js';
import TimelinePage from './components/structure/timelinePage.js';
import ProjectDemo from './components/structure/projectDemo.js';
import WatchDemo from './components/structure/watchDemo.js';
import NavBar from "./components/structure/navBar.js";

// import static assets
import background from "./videos/portfolio-background.mp4";
import bgmusic from "./audios/Empty old City - Moonian.mp3";

function App() {

	const [lang, setLang] = useState("ENG");

	const homeRef = useRef(null);
	const timelineRef = useRef(null);
	const projectDemoRef = useRef(null);

	const refs = [homeRef,timelineRef,projectDemoRef];

	return (
		<div className="App">
			{/* Background Video (Fixed) */}
			<video autoPlay loop muted playsInline  type="video/mp4" className="backgroundVideo">
				<source src={background} />
			</video>

			{/* Fixed Navigation Bar */}
			<NavBar lang={lang} setLang={setLang} refs={refs} bgmusic={bgmusic} />

			{/* Page 1: Home */}
			<div ref={homeRef} className="pageSection homeSection">
				<HomePage lang={lang} />
			</div>

			{/* Page 2: Second (White) */}
			<div ref={timelineRef} className="pageSection timelineSection">
				<TimelinePage lang={lang} />
			</div>

			{/* Page 3: Third (Black) */}
			<div ref={projectDemoRef} className="pageSection projectSection">
				<ProjectDemo lang={lang} />
			</div>

			{/* footer */}
			<div className="footer">
				<h3> overpan @ 2026 </h3>
			</div>

			<WatchDemo />
		</div>
	);
}

export default App;
