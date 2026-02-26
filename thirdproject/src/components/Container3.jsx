import { useState } from "react"
import "./Container.css"
import Square from "./Square"
import Button from "./Button"

const colors = [
  "linear-gradient(135deg, #ff416c, #ff4b2b)",        // red/orange
  "linear-gradient(135deg, #00c6ff, #0072ff)",        // blue
  "linear-gradient(135deg, #7F00FF, #E100FF)",        // purple/pink
  "linear-gradient(135deg, #f7971e, #ffd200)",        // orange/yellow
  "linear-gradient(135deg, #11998e, #38ef7d)",        // teal/green
  "linear-gradient(135deg, #ff5f6d, #ffc371)",        // coral/yellow
  "linear-gradient(135deg, #2193b0, #6dd5ed)",        // light blue
  "linear-gradient(135deg, #fc4a1a, #f7b733)",        // orange gradient
  "linear-gradient(135deg, #43cea2, #185a9d)",        // green/blue
  "linear-gradient(135deg, #ee9ca7, #ffdde1)"         // pink/light
];
export default function Container3 () {
    const [colorIndex, setColor] = useState(0)

    function handleColors(prevIndex) {
        if (prevIndex >= 0 && prevIndex < colors.length) {
            setColor(prevIndex + 1)
        } else {
            setColor(0)
        }
    }

    return (
        <div className="containerStyle">
            <Square style={{ background: colors[colorIndex] }}/>
            <div className="buttonContainer">
                <Button text="Schimba culoarea" style="green" onClickAction={handleColors} type={colorIndex}/>
            </div>
        </div>
    )
}