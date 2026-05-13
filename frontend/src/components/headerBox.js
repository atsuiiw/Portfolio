import React from "react";

import logo from "../atsuiiw.webp"

import youtube from "../youtube.png"
import Xlogo from "../x.png"
import tiktok from "../tiktok.png"
import discord from "../discord.png"

function HeaderBox(){
    return (
        <div className="headerBox">
            <div className="topRow">
                <img src={logo} alt="Overpan logo" />
                <h1> Overpan's Portfolio [2026] </h1>
            </div>
            <div className="headerText">
                <h2> Overpan's [aka atsuiiw] personal portfolio including animations, renders, videos and more. </h2>
                <ul>
                    <li>
                        <a href="https://youtube.com/@overpan"> <img src={youtube} alt="YouTube" /> </a>
                    </li>
                    <li>
                        <a href="https://x.com/overpan_"> <img src={Xlogo} alt="X" /> </a>
                    </li>
                    <li>
                        <a href="https://tiktok.com/@overpan_"> <img src={tiktok} alt="TikTok" /> </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/8YbNpd35me"> <img src={discord} alt="Discord" /> </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderBox;