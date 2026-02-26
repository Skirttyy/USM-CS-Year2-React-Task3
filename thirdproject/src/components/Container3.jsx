import { useState } from "react"
import "./Container.css"
import Square from "./Square"
import Button from "./Button"

const colors = ["red", "green", "blue", "purple"]
export default function Container3 () {
    const [colorIndex, setColor] = useState(0)

    function handleColors(prevIndex) {
        if (prevIndex >= 0 && prevIndex < 4) {
            setColor(prevIndex + 1)
        } else {
            setColor(0)
        }
    }

    return (
        <div className="containerStyle">
            <Square style={{ backgroundColor: colors[colorIndex] }}/>
            <div className="buttonContainer">
                <Button text="Schimba culoarea" style="green" onClickAction={handleColors} type={colorIndex}/>
            </div>
        </div>
    )
}