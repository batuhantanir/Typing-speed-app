import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomWord, selectRandomWord } from "./redux/RandomWordSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(selectRandomWord);
  console.log(data);

  useEffect(() => {
    dispatch(randomWord());
  }, [dispatch]);
  return <>Hello World</>;
}

export default App;
