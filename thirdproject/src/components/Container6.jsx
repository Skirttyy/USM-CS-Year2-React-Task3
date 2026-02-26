import { useState } from "react"
import "./Container.css"
import Button from "./Button"

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
  width: "100px",
  borderRadius: "15px",
  color: "black",
  fontSize: "32px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
};

export default function Container6() {
    const [channelNumber, setChannelNumber] = useState(100)

    function handlerNextChannel (prevChannel) {
        setChannelNumber(prevChannel + 100)
    }

    function handlerPreviousChannel (prevChannel) {
        if (prevChannel === 0) {return}
        setChannelNumber(prevChannel - 100)
    }

    return (
        <div className="containerStyle">
            <div style={style}>
                <p>{channelNumber}</p>
            </div>
            <div className="buttonContainer">
                <Button text="Urmatorul" style="green" onClickAction={handlerNextChannel} type={channelNumber}/>
                <Button text="Precedentul" style="red" onClickAction={handlerPreviousChannel} type={channelNumber}/>
            </div>
        </div>
    )
}