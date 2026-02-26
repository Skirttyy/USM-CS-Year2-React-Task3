import { useState } from "react"
import "./Container.css"
import Tabs from "./Tabs"

export default function Container9 () {
    const [activeIndex, setActiveIndex] = useState(0)

    function handlerButtons(index) {
        setActiveIndex(index)
    }

    return (
        <div className="containerStyle">
            <div className="buttonContainer">
                <Tabs onClickAction={handlerButtons} data={0} text="Tabul 1" selected={activeIndex === 0}/>
                <Tabs onClickAction={handlerButtons} data={1} text="Tabul 2" selected={activeIndex === 1}/>
                <Tabs onClickAction={handlerButtons} data={2} text="Tabul 3" selected={activeIndex === 2}/>
            </div>
        </div>
    )

}