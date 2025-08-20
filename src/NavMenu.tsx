import type { Tab } from "./App";
import "./NavMenu.css";

export interface NavMenuProps {
    tab: Tab | null; // props pass tab so that we can apply selective styling
    setTab: (tab: Tab) => void;
}

export function NavMenu({ tab, setTab }: NavMenuProps) {

    const navItems = [
        { key: "info", label: <u>info</u> },
        { key: "cv", label: <u>cv</u> },
        { key: "painting", label: <>✧ <u>painting</u></> },
        { key: "drawing", label: <>✧ <u>drawing</u></> },
        { key: "print", label: <>✧ <u>print</u></> },
        // todo add projects
    ];

    const emailLink = <a href="mailto:natalie2jacobs2@gmail.com" className="nav-item">
        natalie2jacobs2@gmail.com
    </a>

    const igLink = <a href="http://www.instagram.com/nattty.lite/" target="_blank" rel="noopener noreferrer" className="nav-item">
        nattty.lite
    </a>

    return (
        <div id="nav-menu" >
            <p id="font">Natalie Jacobs ✧</p>
            <div className="nav-menu-inner">
                {navItems.map(item => (
                    <div
                        key={item.key}
                        className="nav-item"
                        onClick={() => setTab(item.key as Tab)}
                    >
                        {item.label}
                    </div>
                ))}
                <div>
                    CONTACT
                </div>
                {emailLink}
                {igLink}
            </div>
        </div>
    );
};
