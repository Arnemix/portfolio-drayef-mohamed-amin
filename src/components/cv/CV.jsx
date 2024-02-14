import React from "react";
import "./CV.scss";
import data from "../../data/cv/cv-data.json";
import { IoLocation } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { getAge, getIcon } from "../../utils/utils";
import { IoCalendarClear } from "react-icons/io5";

function CV(props) {
    return (
        <div className="cv-container">
            <div className="cv-sidebar">
                <div className="cv-picture">{/* Mettre la photo */}</div>
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
                </div>
            </div>
            <div className="cv-main">
                <h2>Main</h2>
            </div>
        </div>
    );
}

export default CV;
