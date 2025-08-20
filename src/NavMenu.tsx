import "./NavMenu.css";

export type Tab = "info" | "cv" | "painting" | "drawing" | "print" | "projects";

export interface NavMenuProps {
    setTab: (tab: Tab) => void;
}

export function NavMenu({ setTab }: NavMenuProps) {

    return (
        <div id="nav-menu" >
            <div>
                <p id="font">Natalie Jacobs ✧</p>
            </div>
            <div className="nav-menu-inner">
                <div className="nav-item" onClick={() => setTab("info")}>
                    <span>
                        <u>info</u>
                    </span>
                </div>
                <div className="nav-item" onClick={() => setTab("cv")}>
                    <span>
                        <u>cv</u>
                    </span>
                </div>
                <div className="nav-item" onClick={() => setTab("painting")}>
                    <span>
                        ✧ <u>painting</u>
                    </span>
                </div>
                <div className="nav-item" onClick={() => setTab("drawing")}>
                    <span id="drawing">
                        ✧ <u>drawing</u>
                    </span>
                </div>
                <div className="nav-item" onClick={() => setTab("print")}>
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
                <div className="nav-section-header">
                    <b>CONTACT</b>
                </div>
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
