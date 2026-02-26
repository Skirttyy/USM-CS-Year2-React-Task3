import { useState } from "react"
import Button from "./Button"
import "./Container.css"

export default function Container2 () {
    const [isShown, setShown] = useState(false)

    function handleShow (prevBool) {
        setShown(!prevBool)
    } 

    return (
        <div className="containerStyle">
            <div className="buttonContainer">
                <Button text="Arata/Ascunde" style={isShown === false ? "red" : "green"} onClickAction={handleShow} type={isShown}/>
            </div>
            <p className={isShown === false ? "hide" : ""}>Textul dat</p>
        </div>
    )
}