import style from "./Footer.module.css"
import Logo from "./Logo"

export default function Footer() {
    const pastificioLinks = [
        {
            title: "Pastificio",
            path: "/pastificio",
        },
        {
            title: "Grano",
            path: "/grano",
        },
        {
            title: "Filiera",
            path: "/filiera",
        }
    ]

    const prodottiLinks = [
        {
            title: "Le Classiche",
            path: "/classiche",
        },
        {
            title: "Le Integrali",
            path: "/integrali",
        },
        {
            title: "Le speciali",
            path: "/speciali",
        },
    ]

    return (
        <footer>
            <div className={`container ${style.background}`}>
                <div className="d-flex">
                    <div className={style.col}>
                        <Logo />
                    </div>
                    <div className={style.col}>
                        <h3>Pastificio</h3>
                        <ul>
                            {pastificioLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.path}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className={style.col}><img src="./logo.png" alt="" /></div>
                    <div className={style.col}>Colonna</div> */}
                    <div className={style.col}>Colonna</div>
                </div>
            </div>
        </footer>
    )
}