import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomWord, selectTime } from "./redux/RandomWordSlice";
import WordsBox from "./components/wordsBox";
import WordsInput from "./components/wordsInput";
import GameOver from "./components/GameOver";

function App() {
  const dispatch = useDispatch();
  const time = useSelector(selectTime);

  useEffect(() => {
    dispatch(randomWord());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center bg-cyan-300 w-full h-screen gap-y-5">
      {time != 0 ? (
        <>
          <WordsBox />
          <WordsInput />
        </>
      ) : (
        <GameOver />
      )}
    </div>
  );
}

export default App;
