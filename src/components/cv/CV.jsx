import React from "react";
import { FaBirthdayCake, FaExternalLinkAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoCalendarClear, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import data from "../../data/cv/cv-data.json";
import { getAge, getIcon } from "../../utils/utils";
import "./CV.scss";

import CVPicture from "../../assets/cv-picture.png";
function CV(props) {
    return (
        <div className="cv-container">
            <div className="cv-sidebar">
                <div className="cv-picture">
                    <img src={CVPicture} alt="profil" />
                </div>
                <div className="cv-name">
                    <h2>Poste : {data["cv-personnal-info"]["jobTitle"]}</h2>
                    <h1>
                        {data["cv-personnal-info"]["firstName"]} {data["cv-personnal-info"]["lastName"]}
                    </h1>
                </div>
                <div className="cv-coordinates">
                    <h2>COORDONNÉES</h2>
                    <div className="cv-coordinates-container">
                        <p>
                            <IoLocation /> {data["cv-personnal-info"]["location"]}
                        </p>
                        <p>
                            <IoIosCall /> {data["cv-personnal-info"]["phoneNumber"]}
                        </p>
                        <p>
                            <MdEmail /> {data["cv-personnal-info"]["email"]}{" "}
                            <a target="_blank" rel="noopener noreferrer" style={{ color: "black" }} href={`mailto:${data["cv-personnal-info"]["email"]}`}>
                                <FaExternalLinkAlt />
                            </a>
                        </p>

                        <p>
                            <FaBirthdayCake /> {data["cv-personnal-info"]["dateOfBirth"]} ({getAge("2001-03-02")} ans)
                        </p>
                        <p>
                            <IoCalendarClear /> disponible maintenant
                        </p>
                        <p>
                            {getIcon("github")} Github
                            <a target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }} href="https://www.github.com/Arnemix">
                                {" "}
                                <FaExternalLinkAlt />
                            </a>
                        </p>
                    </div>
                </div>
                <div className="cv-skills">
                    <h2>Compétences</h2>
                    <div className="cv-skills-container">
                        {data["cv-skill"].map((skill) => {
                            return (
                                <div key={skill["id"]} className="cv-skill">
                                    <p>
                                        {getIcon(skill["name"])} {skill["name"]}
                                    </p>
                                    <p>Frameworks : {skill["learnedFrameworks"].length > 0 ? skill["learnedFrameworks"].join(", ") : "/"}</p>
                                    <div className="progress-container">
                                        <div className="progress" style={{ width: `${skill["level"]}%` }}></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="cv-language">
                        <h2>Langues</h2>
                        <div className="cv-language-container">
                            {data["cv-language"].map((language) => {
                                return (
                                    <div key={language["id"]} className="cv-language-item">
                                        <p>{language["name"]}</p>
                                        <div className="progress-container">
                                            <div className="progress" style={{ width: `${language["level"]}%` }}></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="cv-hobbies">
                        <h2>Hobbies</h2>
                        <div className="cv-hobbies-container">
                            {data["cv-hobbies"].map((hobby) => {
                                return (
                                    <div key={hobby["id"]} className="cv-hobby-item">
                                        <p>
                                            {getIcon(hobby["name"])} {hobby["name"]}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv-main">
                <div className="cv-description">
                    <h2>Description</h2>
                    <p>{data["cv-personnal-info"]["description"]}</p>
                </div>
                <div className="cv-education">
                    <h2>Parcours scolaire</h2>
                    {data["cv-education"].map((education) => {
                        return (
                            <div key={education["id"]} className="cv-education-item">
                                <p>
                                    <b>{education["schoolName"]}</b> - Bruxelles
                                </p>
                                <p>
                                    <b>{education["certification"]}</b> : {education["title"]}
                                </p>
                                <hr />
                            </div>
                        );
                    })}
                </div>
                <div className="cv-experience">
                    <h2>Parcours professionnel</h2>
                    {data["cv-experience"].map((experience) => {
                        return (
                            <div key={experience["id"]} className="cv-experience-item">
                                <p>
                                    <b>{experience["title"]}</b> - {experience["jobType"]} - {experience["duration"]}
                                    <p>
                                        <span>{experience["company"]} - </span> {experience["location"]}
                                    </p>
                                </p>
                                <ul>
                                    <li>{experience["description"]}</li>
                                </ul>
                                <hr />
                            </div>
                        );
                    })}
                </div>
                <div className="cv-certifications">
                    <h2>Certifications</h2>
                    <ul>
                        {data["cv-certifications"].map((certification) => {
                            return <li key={certification["id"]}>{certification["name"]}</li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CV;
