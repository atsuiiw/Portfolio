import './App.css';

// import components
import HeaderBox from './components/headerBox.js';
import WatchDemo from './components/watchDemo.js';
import backgroundPlaceholder from "./preview-full-01.mp4";

function App() {
  return (
    <div className="App">
		<video autoPlay loop muted type="video/mp4" className="backgroundVideo">
			<source src={backgroundPlaceholder}/>
		</video>
		<HeaderBox />
		<WatchDemo />
    </div>
  );
}

export default App;
