import style from "./Main.module.css"
import { products } from "../src/products"

export default function Main() {
    const mainClasses = `py-40 text-center my-40 ${style.background}`




    return (
        <main className={mainClasses}>
            <div className="container">
                <h1>Nostri prodotti</h1>

                <div className="d-flex wrap">
                    {products.map((curProduct) => {
                        let colClass = "col ";
                        if (curProduct.type === "lunga") {
                            colClass += "border-blue"
                        }
                        else if (curProduct.type === "corta") {
                            colClass += "border-green"
                        }
                        else { colClass += "border-red" }

                        return (
                            <div className={colClass} key={curProduct.id}>
                                <img src={curProduct.src} alt={curProduct.title} />
                                <h3>{curProduct.title}</h3>
                                <p>Tipologia : {curProduct.type}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
        </main>
    )
}