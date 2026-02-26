import "./Button.css"

export default function Button({text, onClickAction, type, style}) {
    return (
        <button className={style === "red" ? "buttonRed" : "buttonGreen"} onClick={() => onClickAction(type)}>{text}</button>
    )
}