import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  User, List, Bookmark,
} from 'react-feather';
import logo from 'src/assets/logo.png';
import LoginForm from 'src/containers/Header/LoginForm';
import UserDropdown from 'src/containers/Header/UserDropdown';
import SearchBar from 'src/containers/Header/SearchBar';
import SearchBarMobile from 'src/containers/Header/SearchBarMobile';
import './styles.scss';

const Header = ({
  username, isConnected, openLoginForm,
  isLoginFormOpened,
}) => (
  <div className="header">
    <div className="navbar">
      <div className="series">
        <Link to="/series" className="series-link">
          Toutes les séries
        </Link>
        <a href="/series" className="series-icon">
          <List />
        </a>
      </div>

      <div className="searchbar">
        <SearchBar />
        <SearchBarMobile />
      </div>

      <Link to="/" className="link-logo">
        <img src={logo} alt="logo" className="logo" style={{ height: '2em', width: 'auto' }} />
      </Link>

      <div className="lists">
        {isConnected && (
          <Link to="/mes-listes">
            <p className="list-link">Mes listes</p>
            <Bookmark className="list-icon" />
          </Link>
        )}
      </div>

      {isConnected && (
        <div className="isConnected-links">
          <button
            className="account-button"
            type="button"
            onClick={() => {
              openLoginForm();
            }}
          >
            <p className="user-name">
              {username}
            </p>
            <User className="user-icon" width={30} />
          </button>
        </div>
      )}
      {!isConnected && (
        <div className="isNotConnected-links">
          <button
            className="account-button"
            type="button"
            onClick={() => {
              openLoginForm();
            }}
          >
            <p className="connection">
              Se connecter
            </p>
            <User className="user-icon" width={30} />
          </button>
        </div>
      )}

    </div>

    {isLoginFormOpened && (
    <div className="dropdown">
      {isConnected && (
      <UserDropdown />
      )}
      {!isConnected && (
      <LoginForm />
      )}
    </div>
    )}

  </div>
);

Header.propTypes = {
  username: PropTypes.string,
  isConnected: PropTypes.bool.isRequired,
  openLoginForm: PropTypes.func.isRequired,
  isLoginFormOpened: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  username: '',
};

export default Header;
