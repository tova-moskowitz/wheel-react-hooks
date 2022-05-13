import "./App.css";
import stylizedLogo from "./assets/img/stylizedLogo.png";
import PuzzleBoard from "./components/PuzzleBoard";
// import LetterBoard from "./components/LetterBoard";
import Scores from "./components/Scores";

function App() {
  return (
    <div className="App">
      <img src={stylizedLogo} className="logo" />

      {/* <LetterBoard /> */}
      <PuzzleBoard />
      <Scores />
    </div>
  );
}

export default App;
