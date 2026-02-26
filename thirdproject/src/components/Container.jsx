import { useState } from "react"
import Button from "./Button"
import "./Container.css"

export default function Container () {

    const [incrementor, setIncrementor] = useState(0)

    function handleIncrementor (type) {
        if (type === "add") {
            setIncrementor(incrementor + 1)
        } else if (type === "deadd") {
            setIncrementor(incrementor - 1)
        }
    }

    return (
        <div className="containerStyle">
            <div className="buttonContainer">
                <Button style="red" onClickAction={handleIncrementor} type={"add"} text="Adauga +1" />
                <Button style="green" onClickAction={handleIncrementor} type={"deadd"} text="Scade -1"/>
            </div>
            <p>Numarul tau: {incrementor}</p>
        </div>
    )
}