import { useState } from "react"
import "./Container.css"
import Activity from "./Activity"

export default function Container10 () {

    const [activities, setActivities] = useState([
        "Activitatea 1",
        "Activitatea 2",
        "Activitatea 3"
    ])

    function deleteHandler(index) {
        setActivities(prevActivities =>
            prevActivities.filter((_, i) => i !== index)
        )
    }

    return (
        <div className="containerStyle">
            {activities.map((element, index) => (
                <Activity
                    key={index}
                    text={element}
                    onClickAction={deleteHandler}
                    index={index}
                />
            ))}
        </div>
    )   
}
