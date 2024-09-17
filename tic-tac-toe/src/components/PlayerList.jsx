import PlayerName from "./PlayerName";

export default function PlayerList() {
    return (
     <ol id="players">
        <li>
            <PlayerName symbol="X" />
        </li>
        <li>
            <PlayerName symbol="0"/>
        </li>
    </ol>
    )
}