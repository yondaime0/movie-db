import React from "react";
import { useHistory } from "react-router-dom";

const SearchInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  const history = useHistory();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${inputValue}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={inputValue}
        onChange={handleChange}
        placeholder="Шукати тут..."
        autoComplete="off"
      />
    </form>
  );
};

export default SearchInput;
