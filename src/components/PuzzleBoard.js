import { useState } from "react";

function PuzzleBoard() {
  const [usedLetters, setUsedLetters] = useState([]);
  const [letterClass, setLetterClass] = useState("abc");
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const handleCallLetter = (e) => {
    e.preventDefault();

    alphabet.map((value) => {
      if (value.toUpperCase() === e.target.chosenLetter.value.toUpperCase()) {
        setUsedLetters([...usedLetters, e.target.chosenLetter.value]);
      }
    });
  };

  //output all alphabet with class of each letter set to "abc"
  //when a letter is called, push that letter into usedLetters state

  const outputLetters = () => {
    return usedLetters.map((letter) => {
      return <span className="called">{letter}</span>;
    });
  };

  return (
    <div>
      <div>{outputLetters()}</div>
      <form method="POST" action="" onSubmit={handleCallLetter}>
        <label> Call a Letter</label>
        <p>
          <input type="text" name="chosenLetter" />
          <input type="submit" name="submit" value="Call" />
        </p>
      </form>
    </div>
  );
}

export default PuzzleBoard;
