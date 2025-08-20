import React from "react";
import './NavMenu.css'


type Tab = "info" | "cv" | "painting" | "drawing" | "print" | "projects";

interface NavMenuProps {
    onTabSelect?: (tab: Tab) => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({ onTabSelect }) => {
    const handleTabClick = (tab: Tab) => {
        if (onTabSelect) {
            onTabSelect(tab);
        }
    };

    return (
        <div id="nav-menu">
            <div>
                <p id="font">Natalie Jacobs ✧</p>
            </div>
            <div className="nav-menu-inner">
                <div className="nav-item" onClick={() => handleTabClick("info")}>
                    <span>
                        <u>info</u>
                    </span>
                </div>
                <div className="nav-item" onClick={() => handleTabClick("cv")}>
                    <span>
                        <u>cv</u>
                    </span>
                </div>
                <div className="nav-item" onClick={() => handleTabClick("painting")}>
                    <span>
                        ✧ <u>painting</u>
                    </span>
                </div>
                <div className="nav-item" onClick={() => handleTabClick("drawing")}>
                    <span id="drawing">
                        ✧ <u>drawing</u>
                    </span>
                </div>
                <div className="nav-item" onClick={() => handleTabClick("print")}>
                    <span>
                        ✧ <u>print</u>
                    </span>
                </div>
                {/* Uncomment to enable projects tab
                <div className="nav-item" onClick={() => handleTabClick("projects")}>
                    <span>
                        ✧ <u>projects</u>
                    </span>
                </div>
                */}
                <div className="nav-section-header">CONTACT</div>
                <a href="mailto:natalie2jacobs2@gmail.com">
                    natalie2jacobs2@gmail.com
                </a>
                <a href="http://www.instagram.com/nattty.lite/" target="_blank" rel="noopener noreferrer">
                    nattty.lite
                </a>
            </div>
        </div>
    );
};
