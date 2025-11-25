import style from "./Main.module.css"

export default function Main() {
    const mainClasses = `py-40 text-center ${style.background}`
    return (
        <main className={mainClasses}>
            <h1>Content goes here</h1>
        </main>
    )
}