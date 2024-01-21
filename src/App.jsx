import { useSelector } from "react-redux";
import "./App.css";
import Count from "./Count";
import { useGetDataQuery } from "./Store/MyApi";

function App() {
  const {value} = useSelector((state)=> state.counter)
  const {data,refetch,isFetching} = useGetDataQuery('brands')
  console.log(data,isFetching);

  return (
    <>
      <h1>{value}</h1>
      <Count/>
      <button onClick={refetch}>refetch</button>
    </>
  );
}

export default App;
