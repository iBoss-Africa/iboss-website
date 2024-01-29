import React, { useState, useEffect } from "react";
import "./scroll.css";

const skillsList1 = ["Python", "React.Js", "Node.Js", "Ruby on Rails"];
const skillsList2 = ["Dynamic 365", "Flutter", "Angular", "Swift"];

const InfiniteScrolling = ({ items, fadeInOut = false, animationName }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2000); // Adjust the interval as needed

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <ul className="skills_list">
            {items.map((item, i) => (
                <li
                    key={i}
                    className={fadeInOut ? (index === i ? "visible" : "hidden") : (i === 0 ? "visible" : "")}
                    style={{ animationName }}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

const SkillBased = () => {
    return (
        <div className="skill_container">
            <div className="skillsList1">
                <InfiniteScrolling items={skillsList1} animationName="scrollRightLeft1" />
            </div>

            <div className="skillsList2">
                <InfiniteScrolling items={skillsList2} fadeInOut animationName="fadeInOut" />
            </div>
        </div>
    );
};

export default SkillBased;
