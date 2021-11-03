
import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCardsThunk} from "./app-reducer";

function App() {
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getCardsThunk())
},[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
