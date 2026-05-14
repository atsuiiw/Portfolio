import { useState } from "react";
import ReactPlayer from 'react-player';


function WatchDemo() {
    const [modal, modalState] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [index, setIndex] = useState(0);

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            modalState(false);
            setIsClosing(false);
        }, 300);
    };

    const ytLink = [
        "https://youtu.be/L9LCjo1kmoc",
        "https://youtu.be/wsCyRWqLhTw",
        "https://youtu.be/0BMNtwe6vWM",
        "https://youtu.be/s1i4kdVAKpA",
        "https://youtu.be/KTA0FOBRedY",
        "https://youtu.be/BIt0S6nnCE8"
    ];

    return (
        <div>
            <button onClick={() => modalState(true)} className="demoBtn"> Demo </button>
            {modal && (
                <div className={`modal ${isClosing ? 'modal-closing' : 'modal-opening'}`}>
                    <div className={`dim ${isClosing ? 'dim-closing' : 'dim-opening'}`} onClick={closeModal}></div>
                    <div className={`popupWindow ${isClosing ? 'popup-closing' : 'popup-opening'}`}>
                        <button onClick={closeModal} className="modalClose">X</button>
                        <div className="mainWindow">
                            <ReactPlayer src={ytLink[index]}
                                style={{
                                    width: '80%', height: 'auto',
                                    aspectRatio: '16/9'
                                }} />
                        </div>
                        <ul>
                            <li> <button onClick={() => setIndex(0)}> IRIS OUT </button> </li>
                            <li> <button onClick={() => setIndex(1)}> ReawakeR </button> </li>
                            <li> <button onClick={() => setIndex(2)}> Bling Bang Bang Born </button> </li>
                            <li> <button onClick={() => setIndex(3)}> Daten </button> </li>
                            <li> <button onClick={() => setIndex(4)}> Specialz </button> </li>
                            <li> <button onClick={() => setIndex(5)}> Five Stage Volley </button> </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WatchDemo;