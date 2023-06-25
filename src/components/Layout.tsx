import { ReactNode } from "react";
import NavBar from "./Navbar";

interface ILayout {
    children: ReactNode
}
export default function Layout({ children }: ILayout) {
    return (
        <>
            <NavBar />
            <div className="container">{children}</div>
        </>
    )
}