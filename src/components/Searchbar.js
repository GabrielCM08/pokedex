import React, { useState } from "react";

const Searchbar = (props) => {
  const [search, setSearch] = useState("");
  const { onSearch } = props;
  const onChangeHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
    if (e.target.value.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
    }
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          placeholder="Buscar Pokemon"
          onChange={onChangeHandler}
          onKeyUp={handleKeyPress.bind()}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
