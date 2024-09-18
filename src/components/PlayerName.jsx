import { useState } from "react"

export default function PlayerName({ symbol }) {
    const [playerName, setPlayerName] = useState(`Player ${symbol}`);
    const [isEditing, setIsEditing] = useState(true);
    let playerDisplayName = <span className="player-name">{playerName}</span>
    if (!isEditing) {
        playerDisplayName = <input type="text" className="player-name" onChange={handleChange} value={playerName} required/>
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    function handleClick() {
        setIsEditing(editing => !editing)
    }
    return (
    <>
        <span className="player">
            {playerDisplayName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing ? 'Edit' : 'Save' }</button>
    </>
    )
}