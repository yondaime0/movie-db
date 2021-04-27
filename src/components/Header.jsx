import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function Header() {
  const [inputValue, setInputValue] = React.useState('');
  const history = useHistory();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${inputValue}`);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link className="header__logo-link" to="/">
          MOVIES
        </Link>
      </div>
      <div className="header__search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={inputValue}
            onChange={handleChange}
            placeholder="Шукати тут..."
            autocomplete="off"
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
