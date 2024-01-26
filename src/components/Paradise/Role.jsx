import React, { useState, useEffect } from "react";
import "./scroll-role.css";

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

const RoleBased = () => {
    return (
        <div className="skill_container">

            <div className="role_list1">
                <InfiniteScrolling items={["Fullstack Engineer", "Frontend Engineer"]} animationName="fadeInOut" />
            </div>

            <div className="role_list2">
                <InfiniteScrolling items={["Backend Engineer", "DevOps Engineer"]} fadeInOut animationName="fadeInOut" />
            </div>
        </div>
    );
};

export default RoleBased;
