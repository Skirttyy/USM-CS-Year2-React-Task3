import Button from "./Button"
import "./Container.css"

export default function Votes ({title, votes, votesHandler}) {
    return (
        <div className="containerStyle">
            <h1>{title}</h1>
            <h2>Numarul de voturi: {votes}</h2>
            <div className="buttonContainer">
                <Button text="Voteaza" style="green" onClickAction={votesHandler} type={votes}/>
            </div>
        </div>
    )
}