import "./Tabs.css"

export default function Tabs ({onClickAction, data, selected, text}) {
    return (
        <button onClick={() => onClickAction(data)} className={selected === true ? "button-selected" : "button-unselected"}>{text}</button>
    )
}