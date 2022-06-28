import { Route, Routes } from "react-router-dom"
import Search from "./components/Search"
import Flight from "./components/Flight"

const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Search />} exact />
      <Route path="/flight" element={<Search />} exact />
      <Route path="/flight/:from/:to/:date" element={<Flight />} exact />
    </Routes >
  );
}
export default App;
