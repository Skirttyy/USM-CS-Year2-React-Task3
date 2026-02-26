import { useState } from "react"
import "./Container.css"
import Votes from "./Votes"

export default function Container8 () {
    const [dogsVotes, setDogsVotes] = useState(0)
    const [catsVotes, setCatsVotes] = useState(0)

    function dogsVotesHandler (prevVotes) {
        setDogsVotes(prevVotes + 1)
    }

    function catsVotesHandler (prevVotes) {
        setCatsVotes(prevVotes + 1)
    }

    return (
        <div className="containerStyle">
            <Votes title="Caini" votesHandler={dogsVotesHandler} votes={dogsVotes}/>
            <Votes title="Pisici" votesHandler={catsVotesHandler} votes={catsVotes} />
        </div>
    )
}