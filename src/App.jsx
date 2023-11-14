import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { randomWord } from "./redux/RandomWordSlice";
import WordsBox from "./components/wordsBox";
import WordsInput from "./components/wordsInput";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(randomWord());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center bg-cyan-300 w-full h-screen gap-y-5">
      <WordsBox />
      <WordsInput />
    </div>
  );
}

export default App;
