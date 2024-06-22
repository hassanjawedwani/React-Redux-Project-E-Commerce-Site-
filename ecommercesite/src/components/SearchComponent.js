import React from "react";
import Header from "./Header";

const SearchComponent = () => {
  const handlerSearch = e => {
    fetch("https://cat-fact.herokuapp.com/facts")
    .then(resp => resp.json())
    .then(result => {
        console.log(result);
    })
   

  }
  return (
    <div>
      <Header />
      <h1>Search</h1>
      {/* <input type="text" placeholder="search" onChange={handlerSearch} /> */}
      <button onClick={handlerSearch}>het</button>
    </div>
  );
};

export default SearchComponent;
