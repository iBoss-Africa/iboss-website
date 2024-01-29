import React, { useState } from "react";
import "./paradise.css";
import SkillBased from "./Skill";
import RoleBased from "./Role";

const Paradise = () => {
    const [activeButton, setActiveButton] = useState("Skill");

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return (
        <section id="paradise">
            <h2>A paradise of Engineers</h2>
            <h4>
                Expand your team as needed with experienced Devs that are already vetted
                for business projects
            </h4>
            <div className="container paradise_container">
                <div className="buttons_container">
                    <div className="btn_process">
                        <button
                            className={`btn primary ${activeButton === "Skill" ? "active" : ""
                                }`}
                            onClick={() => handleButtonClick("Skill")}
                        >
                            Skill Based
                        </button>
                    </div>
                    <div className="btn_process">
                        <button
                            className={`btn primary ${activeButton === "Role" ? "active" : ""
                                }`}
                            onClick={() => handleButtonClick("Role")}
                        >
                            Role Based
                        </button>
                    </div>
                </div>

                <div className="skills_container">
                    {activeButton === "Skill" && <SkillBased />}
                    {activeButton === "Role" && <RoleBased />}
                </div>
            </div>
        </section>
    );
};

export default Paradise;
