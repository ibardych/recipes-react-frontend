import { Menu, Link, List, MenuContainer } from './MobileMenu.styled.jsx';
import { Logo } from 'components/Logo/Logo';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler.jsx';
import Sprite from 'images/sprite.svg';

const MobileMenu = ({ handleClick }) => {
  return (
    <Menu>
      <MenuContainer>
        <Logo />
        <svg className="close" onClick={handleClick}>
          <use href={`${Sprite}#icon-close`}></use>
        </svg>
        <List>
          <li>
            <Link to="/categories" onClick={handleClick}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/add" onClick={handleClick}>
              Add recipes
            </Link>
          </li>
          <li>
            <Link to="/my" onClick={handleClick}>
              My recipes
            </Link>
          </li>
          <li>
            <Link to="/favorite" onClick={handleClick}>
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/shopping-list" onClick={handleClick}>
              Shopping list
            </Link>
          </li>
          <li>
            <Link to="/search" onClick={handleClick}>
              <svg className="search">
                <use href={`${Sprite}#icon-search`}></use>
              </svg>
              Search
            </Link>
          </li>
        </List>

        <ThemeToggler />
      </MenuContainer>
    </Menu>
  );
};

export default MobileMenu;
