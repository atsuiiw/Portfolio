import ReactPlayer from 'react-player';

import { projectData, viewportData } from '../data/projectDemo.data.js'
import "../style/projectDemo.css"

function ProjectDemo({ lang }) {

    const ProjectList = () => {
        return (
            <div className="projectDemo-projectList">
                {projectData.map((item, index) => {
                    const skills = lang === "ENG" ? item.skillsENG : item.skillsTH;
                    const showSkillsLabel = lang === "ENG" ? "Show skills" : "แสดงทักษะ";

                    return (
                        <div className="projectDemo-projectCard" key={index}>
                            <div className="projectDemo-playerWrapper">
                                <ReactPlayer src={item.link} width="100%" height="100%" controls />
                            </div>

                            <h2 className="projectDemo-projectTitle">{item.name}</h2>
                            <p className="projectDemo-projectDescription">{lang === "ENG" ? item.descriptionENG : item.descriptionTH}</p>

                            <div className="projectDemo-projectFooter">
                                <a
                                    className="projectDemo-projectLink"
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {lang === "ENG" ? "Open video" : "เปิดวิดีโอ"}
                                </a>

                                <details className="projectDemo-skillsDropdown">
                                    <summary className="projectDemo-skillsSummary">{showSkillsLabel}</summary>
                                    <ul className="projectDemo-skillsList">
                                        {skills.map((skill, skillIndex) => (
                                            <li key={skillIndex}>{skill}</li>
                                        ))}
                                    </ul>
                                </details>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }

    const PreviewList = () => {
        return (
            <div className="viewportDemo-container">
                {viewportData.map((item, index) => {
                    return (
                        <video
                            key={index}
                            src={item}
                            controls
                            preload="metadata"
                            playsInline
                            className="projectDemo-viewportDemo"
                        />
                    )
                })}
            </div>
        )
    }


    return (
        <div className="projectDemo-container">
            <h1 className="projectDemo-title"> {lang === "ENG" ? "Projects" : "โปรเจกต์"} </h1>
            <ProjectList />
            <PreviewList />
        </div>
    )
}

export default ProjectDemo;