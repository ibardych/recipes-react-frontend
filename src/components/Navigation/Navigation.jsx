// import PropTypes from 'prop-types';
import { LinkStyled, NavigationStyled } from './Navigation.styled';
import Sprite from 'images/sprite.svg';

const Navigation = () => {
  return (
    <NavigationStyled>
      <li>
        <LinkStyled to="/categories">Categories</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/add">Add recipes</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/my">My recipes</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/favorite">Favorites</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/shopping-list">Shopping list</LinkStyled>
      </li>
      <li>
        <LinkStyled to="/search">
          <svg className="search">
            <use href={`${Sprite}#icon-search`}></use>
          </svg>
        </LinkStyled>
      </li>
    </NavigationStyled>
  );
};

export default Navigation;
