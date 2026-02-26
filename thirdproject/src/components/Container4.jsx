import { useState } from "react"
import Button from "./Button"
import "./Container.css"

let arrayOfImages = ["https://i.pinimg.com/474x/3a/c8/a5/3ac8a5b3b9ef9a4da7914fa02e3426d5.jpg", "https://i.pinimg.com/236x/76/1f/9d/761f9d559822d72e5d1ad4733cac303f.jpg", "https://i.pinimg.com/474x/fd/f8/48/fdf848eb655fef17804a51f553dec66d.jpg"]

export default function Container4 () {

    const [indexImages, setIndexImages] = useState(0)

    function handleNextIndexImages(prevIndex) {
        if (prevIndex >= 0 && prevIndex < 2) {
            setIndexImages(prevIndex + 1)
        } else {
            setIndexImages(0)
        }
    }

    function handlePreviousIndexImages(prevIndex) {
        if (prevIndex > 0 && prevIndex < 3) {
            setIndexImages(prevIndex - 1)
        } else {
            setIndexImages(2)
        }
    }

    return (
        <div className="containerStyle">
            <div>
                <img src={arrayOfImages[indexImages]}></img>
            </div>
            <div className="buttonContainer">
                <Button text="Inainte!" style="green" onClickAction={handleNextIndexImages} type={indexImages}/>
                <Button text="Inapoi!" style="red" onClickAction={handlePreviousIndexImages} type={indexImages}/>
            </div>
        </div>
    )
}