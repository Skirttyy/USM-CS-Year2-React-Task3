export default function Activity ({onClickAction, index, text}) {
    return (
        <p onClick={() => onClickAction(index)}>{text}</p>
    )
}