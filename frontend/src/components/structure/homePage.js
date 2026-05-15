import React from "react";
import logo from "../../images/atsuiiw.webp"
import "../style/homePage.css"

function HomePage({ lang }) {
    return (
        <div className="headerBox">
            <img src={logo} alt="Overpan logo" className="headerBox-img" />
            <div className="headerBox-content">
                <div className="topRow">
                    <h1> Overpan's Portfolio [2026] </h1>
                </div>
                <div className="descriptionText">
                    <h2> {lang === "ENG" ? "Overpan's [aka atsuiiw] personal portfolio including animations, renders, videos, compositing and more." :
                        "ผลงานส่วนตัวของ Overpan [aka atsuiiw] รวมถึงแอนิเมชั่น เรนเดอร์ วิดีโอ การทำคอมโพสิต และอื่นๆ"} </h2>
                    <ul>
                        <li>
                            <a href="https://youtube.com/@overpan">YouTube</a>
                        </li>
                        <li>
                            <a href="https://x.com/overpan_">X</a>
                        </li>
                        <li>
                            <a href="https://tiktok.com/@overpan_">TikTok</a>
                        </li>
                        <li>
                            <a href="https://github.com/atsuiiw">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomePage;