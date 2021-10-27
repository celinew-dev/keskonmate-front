import './styles.scss';
import {
  User, List, Bookmark,
} from 'react-feather';
import logo from 'src/assets/logo.png';
import SearchBar from './SearchBar';
import LoginForm from './LoginForm';

const Header = () => (
  <div className="header">
    <div className="left-navbar">
      <a href="/series" className="series-link">
        Toutes les séries
      </a>
      <a href="/series" className="series-icon">
        <List size="20" />
      </a>

      <SearchBar />
    </div>

    <img src={logo} alt="logo" className="logo" />

    <div className="right-navbar">
      <a href="/list" className="list-link">
        Mes listes
      </a>
      <a href="/list" className="list-icon">
        <Bookmark size="20" />
      </a>

      <p className="user-name">
        Utilisateur
      </p>

      <a href="/user" className="user-account-link">
        <User size="20" />
      </a>

      <LoginForm />
    </div>

  </div>
);

export default Header;
