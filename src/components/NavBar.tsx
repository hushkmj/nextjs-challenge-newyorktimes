import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    return (
        <nav>
            <div className="nav__list">
                <Link href={"/"}>
                    <span className={router.pathname === "/" ? "active" : ""}>Home</span>
                </Link>
                <Link href={"/about"}>
                    <span className={router.pathname === "/about" ? "active" : ""}>About</span>
                </Link>
            </div>
            <style jsx>{`
                .active{
                    color:white;
                }    
                span{
                    cursor: pointer;
                }
            `}</style>
        </nav>
    );
}