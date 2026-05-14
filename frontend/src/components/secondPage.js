import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./secondPage.css";

const timelineData = [
    {
        year: "2018 - 2020",
        descEng: "I started animating with Mine-Imator to make 3D Minecraft animations and uploaded them on YouTube. I had no prior experiences nor knowledges. This period of time was mostly spent learning and gaining and understanding of foundations of animations and filmmaking.",
        descTh: "ผมเริ่มสร้างแอนิเมชั่นด้วย Mine-Imator เพื่อสร้างแอนิเมชั่น Minecraft และอัปโหลดบน YouTube ฉันไม่มีประสบการณ์หรือความรู้มาก่อน ช่วงเวลานี้ส่วนใหญ่ใช้ไปกับการเรียนรู้และได้รับและทําความเข้าใจเกี่ยวกับรากฐานของการแอนิเมชั่นและภาพยนต์",
        learnEng: ["12 Principles of animation", "3D animation", "Mine-Imator", "After Effects"],
        learnTh: ["12 หลักการแอนิเมชั่น", "3D แอนิเมชั่น", "Mine-Imator", "After Effects"],
        videos: ["https://youtu.be/IlsU_xRjDMM"]
    },
    {
        year: "2020 - 2024",
        descEng: "I transitioned into another program, Blender. Because Blender is fundamentally more versitile in every aspect such as animation, modelling and compositing. This was a huge step up in workflow and quality and is the main software I use till now. Additionally during this period, I got to work with multiple projects from different teams and studios. This acquired me how to work on a team setting, meeting deadlines and being open to feedbacks.",
        descTh: "ผมได้เปลี่ยนไปใช้โปรแกรมอื่น Blender เพราะ Blender มีความสามารถที่หลากหลายกว่าทั้งในด้านแอนิเมชั่น การสร้างโมเดล และการทำคอมโพสิต นี่เป็นการก้าวกระโดดครั้งใหญ่ในแง่ของกระบวนการทำงานและคุณภาพ และเป็นซอฟต์แวร์หลักที่ผมใช้จนถึงตอนนี้ นอกจากนี้ในช่วงเวลานี้ผมได้ทํางานกับหลายโครงการจากทีมและสตูดิโอที่แตกต่างกัน ทําให้ผมได้วิธีการทํางานในการตั้งค่าทีม ตรงตามกําหนดเวลา และเปิดรับข้อเสนอแนะ",
        learnEng: ["3D animation (extras)", "New workflow", "Blender"],
        learnTh: ["3D แอนิเมชั่น (เพิ่มเติม)", "กระบวนการทำงานใหม่", "Blender"],
        videos: ["https://youtu.be/0DqIQTD4ynM", "https://youtu.be/2c-3eEZELHw"]
    },
    {
        year: "2024 - 2025",
        descEng: "Ever since I started using Blender, I had always stick with Minecraft as a main subject, whether it be short minecraft animation or a long form content. But in 2024, I experiment with more humanoid character animations. This led me to a new path of content I've never made before. Gaining tons of exposure on internet and exposed me to a bunch of oppertunities.",
        descTh: "นับตั้งแต่ผมเริ่มใช้ Blender ผมก็ยึดติดกับ Minecraft เป็นหัวข้อหลักมาโดยตลอด ไม่ว่าจะเป็นแอนิเมชั่น minecraft สั้น ๆ หรือเนื้อหาแบบยาว แต่ในปี 2024 ผมทดลองกับแอนิเมชั่นตัวละครฮิวแมนนอยด์มากขึ้น สิ่งนี้นําผมไปสู่เส้นทางใหม่ของเนื้อหาที่ผมไม่เคยสร้างมาก่อน ทำให้เป็นที่ทราบมากมายบนอินเทอร์เน็ตและทําให้ฉันได้สัมผัสกับโอกาสมากมาย",
        learnEng: ["Full production workflow", "Humanoid animation"],
        learnTh: ["กระบวนการผลิตเต็มรูปแบบ", "แอนิเมชั่นฮิวแมนนอยด์"],
        videos: ["https://youtu.be/0BMNtwe6vWM", "https://youtu.be/KTA0FOBRedY"]
    },
    {
        year: "2025 - Present",
        yearTh: "2025 - ปัจจุบัน",
        descEng: "In 2025, I released an animation 'Nagi's Five Stage Volley Goal | Roblox Animation' on Youtube. It got quite a lot of traction online. This is another big moment in my journey as this open another new path for my animation career. After this video gain multiple thousands of views, I was contacted by several Roblox game owner to work for their game as their animator. What differentiate this milestone compared to the prior humanoid animation is that Roblox animation is a community based work where I actually get paid without relying on Youtube system. This help me get a lot more exposure and I was able to connect with a lot of people in the community and also being able to gain some money to upgrade my equipments and to be able to buy more assets for myself.",
        descTh: "ในปี 2025 ผมได้อัปโหลดตัวแอนิเมชั่น 'Nagi's Five Stage Volley Goal | Nagi Roblox Animation' บน Youtube และได้รับความสนใจค่อนข้างมากทางออนไลน์ นี่เป็นอีกช่วงเวลาสําคัญในการเดินทางของผมเนื่องจากเป็นการเปิดเส้นทางใหม่สําหรับอาชีพแอนิเมชั่นของผม หลังจากวิดีโอนี้มียอดดูหลายพันครั้ง ผมก็ได้รับการติดต่อจากเจ้าของเกม Roblox หลายคนให้ทํางานให้กับเกมของพวกเขาในฐานะแอนิเมเตอร์ สิ่งที่ทําให้เหตุการณ์สําคัญนี้แตกต่างจากแอนิเมชั่นฮิวแมนนอยด์ก่อนหน้านี้คือแอนิเมชั่น Roblox เป็นงานชุมชนที่ผมได้รับเงินจริงโดยไม่ต้องพึ่งพาระบบ Youtube สิ่งนี้ช่วยให้ผมได้รับการเปิดเผยมากขึ้น และผมสามารถเชื่อมต่อกับผู้คนมากมายในชุมชน และยังสามารถหาเงินเพื่ออัปเกรดอุปกรณ์ของผมและสามารถซื้อของใช้เพิ่มเติมสําหรับตัวเองได้",
        learnEng: ["Animation for games", "Communication & Work ethic", "Working in a team"],
        learnTh: ["แอนิเมชั่นสําหรับเกม", "การสื่อสารและจริยธรรมในการทํางาน", "การทํางานเป็นทีม"],
        videos: ["https://youtu.be/BIt0S6nnCE8", "https://youtu.be/fSQ7_a82OS8"]
    }
];

const TimelineItem = ({ data, lang }) => {
    const [isOpen, setIsOpen] = useState(false);

    const year = lang === "ENG" ? data.year : (data.yearTh || data.year);
    const desc = lang === "ENG" ? data.descEng : data.descTh;
    const learnList = lang === "ENG" ? data.learnEng : data.learnTh;

    // Determine the toggle text based on what's available
    const hasLearnings = learnList && learnList.length > 0;
    const hasVideos = data.videos && data.videos.length > 0;

    let toggleText = "";
    if (lang === "ENG") {
        toggleText = hasLearnings ? "What I learn & Media" : "Media";
    } else {
        toggleText = hasLearnings ? "สิ่งที่ได้เรียนรู้ & สื่อ" : "สื่อ";
    }

    return (
        <li className="timeline-item">
            <div className="timeline-header">
                <h2 className="timeline-year">{year}</h2>
                <span className="timeline-arrow">➔</span>
            </div>
            <p className="timeline-desc">{desc}</p>

            {(hasLearnings || hasVideos) && (
                <div className="timeline-dropdown">
                    <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
                        <span>{toggleText}</span>
                        <span>{isOpen ? "▲" : "▼"}</span>
                    </button>

                    {isOpen && (
                        <div className="dropdown-content">
                            {hasLearnings && (
                                <div className="learnings-section">
                                    <h3>{lang === "ENG" ? "What I learn" : "สิ่งที่ได้เรียนรู้"}</h3>
                                    <ul>
                                        {learnList.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {hasVideos && (
                                <div className="media-section">
                                    {data.videos.map((src, index) => (
                                        <div key={index} className="video-wrapper">
                                            <ReactPlayer
                                                src={src}
                                                width="100%"
                                                height="100%"
                                                controls={true}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </li>
    );
};

function SecondPage({ lang }) {
    return (
        <div className="second-page-container">
            <h1> {lang === "ENG" ? "Timeline" : "ไทม์ไลน์"} </h1>
            <div className="timeline">
                <ul className="timeline-list">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} data={item} lang={lang} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SecondPage;