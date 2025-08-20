
export type Tab = "info" | "cv" | "painting" | "drawing" | "print" | "projects";

export interface NavMenuProps {
    setTab: (tab: Tab | null) => void;
}

export function Home({ setTab }: NavMenuProps) {
    return (<div onClick={() => { setTab(null) }} className="home" >
        <p>♠ Return Home ♠</p>
    </div >)
}