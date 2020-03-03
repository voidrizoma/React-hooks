import React, { useState } from "react";

const Search = (props) => {
//dos paràmetros.. el inicio del estao y el cambio de estado... useState en srting vacìo, puesto que no hay dato
  const [searchValue, setSearchValue] = useState("");
  //funcion que cacha el valor del input
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }
// reinicia el input
  const resetInputField = () => {
    setSearchValue("")
  }
//realiza la busqueda....
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }
  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;
