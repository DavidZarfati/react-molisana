import style from './Header.module.css'
import Logo from './Logo'

export default function Header() {
    return (
        <header className="text-center">
            <Logo />
            <nav className={style.nav}>
                <ul className="d-flex justify-content-center g-20">
                    <li><a href="">Home</a></li>
                    <li className={style.active}><a href="">Chi siamo</a></li>
                    <li><a href="">Contatti</a></li>
                    <li><a href="">Prodotti</a></li>
                </ul>
            </nav>
        </header>
    )
}