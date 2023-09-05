import React, {useState} from "react";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";

const App = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <CardList filter={search} />
    </>
  );
};

export default App;
