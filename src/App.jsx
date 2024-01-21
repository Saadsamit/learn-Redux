import { useSelector } from "react-redux";
import "./App.css";
import Count from "./Count";

function App() {
  const {value} = useSelector((state)=> state.Counter)

  return (
    <>
      <h1>{value}</h1>
      <Count/>
    </>
  );
}

export default App;
