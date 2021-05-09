import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link className="header__logo-link" to="/">
          MOVIES
        </Link>
      </div>
      <div className="header__search">
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
