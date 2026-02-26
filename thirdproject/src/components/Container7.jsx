import { useState } from "react"
import "./Container.css"
import Button from "./Button"

export default function Container7 () {

    const [productsNumber, setProductsNumber] = useState(0)

    function productsNumberHandler (prevNumber) {
        setProductsNumber(prevNumber + 1)
    }
    return (
        <div className="containerStyle">
            <p>Numarul total de produse este: {productsNumber}</p>
            <div className="buttonContainer">
                <Button text="Banane" style="green" onClickAction={productsNumberHandler} type={productsNumber}/>
                <Button text="Mere" style="green" onClickAction={productsNumberHandler} type={productsNumber}/>
                <Button text="Pere" style="green" onClickAction={productsNumberHandler} type={productsNumber}/>
            </div>
        </div>
    )
}