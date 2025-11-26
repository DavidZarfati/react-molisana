import style from './Header.module.css'
import Logo from './Logo'

export default function Header() {
    // const links = ["Home", "Prodotti", "Chi siamo", "Contatti"]

    const links = [
        {
            title: "Home",
            path: "/home",
            active: false,
        },
        {
            title: "Prodotti",
            path: "/prodotti",
            active: true,
        },
        {
            title: "Chi siamo",
            path: "/chi-siamo",
            active: false,
        },
        {
            title: "Contatti",
            path: "/contatti",
            active: false,
        }
    ]

    return (
        <header className="text-center">
            <Logo />
            <nav className={style.nav}>
                <ul className="d-flex justify-content-center g-20">

                    {links.map((curLink, index) => (
                        <li key={index} className={curLink.active ? style.active : ""}>
                            <a href={curLink.path}>{curLink.title}</a>
                        </li>
                    ))}

                    {/* <li><a href="">Home</a></li>
                    <li className={style.active}><a href="">Chi siamo</a></li>
                    <li><a href="">Contatti</a></li>
                    <li><a href="">Prodotti</a></li> */}
                </ul>
            </nav>
        </header>
    )
}