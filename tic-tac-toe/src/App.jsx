import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import PlayerList from "./components/PlayerList"

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="game-container">
         <PlayerList />
         <GameBoard />
        </div>
      </main>
    </>
  )
}

export default App
