import React from "react";
import "./CV.scss";
import data from "../../data/cv/cv-data.json";
import { IoLocation } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { getAge, getIcon } from "../../utils/utils";
import { IoCalendarClear } from "react-icons/io5";
import CVPicture from "../../assets/cv-picture.png";
function CV(props) {
    return (
        <div className="cv-container">
            <div className="cv-sidebar">
                <div className="cv-picture">
                    <img src={CVPicture} alt="profil" />
                </div>
                <div className="cv-coordinates">
                    <h2>COORDONNÉES</h2>
                    <p>
                        <IoLocation /> {data["cv-personnal-info"]["location"]}
                    </p>
                    <p>
                        <IoIosCall /> {data["cv-personnal-info"]["phoneNumber"]}
                    </p>
                    <p>
                        <MdEmail /> {data["cv-personnal-info"]["email"]}
                    </p>
                    <p>
                        <FaBirthdayCake /> {data["cv-personnal-info"]["dateOfBirth"]} ({getAge("2001-03-02")} ans)
                    </p>
                    <p>
                        <IoCalendarClear /> disponible maintenant
                    </p>
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
                                        <p>{hobby["name"]}</p>
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
                                    <b>{education["certification"]}</b> : {education["title"]}
                                </p>
                                <p>
                                    <b>{education["schoolName"]}</b> - Bruxelles
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
                                </p>
                                <p>
                                    <span>{experience["company"]} - </span> {experience["location"]}
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
