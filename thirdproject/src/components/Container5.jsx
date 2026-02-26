import { useState } from "react"
import "./Container.css"
import Button from "./Button"

export default function Container5 () {
    const [dieNumber, setDieNumber] = useState(1)

    function handlerDieNumber (prevNumber) {
        setDieNumber(Math.floor(Math.random() * 6) + 1)
    }
    
    return (
        <div className="containerStyle">
            <p>Numarul zarului este: {dieNumber}</p>
            <div className="buttonContainer">
                <Button text="Arunca zarul!" onClickAction={handlerDieNumber} type={dieNumber} style="green"/>
            </div>
        </div>
    )
}