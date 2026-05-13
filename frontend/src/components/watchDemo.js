import React from "react"
import {useEffect, useState} from "react"

function WatchDemo(){
    const [modal, modalState] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            modalState(false);
            setIsClosing(false);
        }, 300);
    };

    return (
        <div>
            <button onClick={() => modalState(true)} className="demoBtn"> Demo </button>
            {modal && (
                <div className={`modal ${isClosing ? 'modal-closing' : 'modal-opening'}`}>
                    <div className={`dim ${isClosing ? 'dim-closing' : 'dim-opening'}`} onClick={closeModal}></div>
                    <div className={`popupWindow ${isClosing ? 'popup-closing' : 'popup-opening'}`}>
                        <button onClick={closeModal} className="modalClose">X</button>
                        <div className="mainWindow">
                            <iframe src="https://youtu.be/wsCyRWqLhTw"></iframe>
                        </div>
                        <ul>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WatchDemo;