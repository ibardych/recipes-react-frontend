import { Button } from 'components/Styled';
import BACKEND_URL from 'constants/backend.url';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteOwnRecipe } from 'redux/ownRecipes/operations';
import Sprite from 'images/sprite.svg';
import {
  Bottom,
  DeleteButton,
  Description,
  Image,
  RecipeCardStyled,
  Time,
  Title,
  Top,
  Wrapper,
} from './RecipeCard.styled';

const RecipeCard = ({ recipe, type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, owner, preview, description, title, time } = recipe;

  const deleteRecipe = id => {
    dispatch(deleteOwnRecipe(id));
  };

  const navigateToRecipe = id => {
    navigate(`/recipe/${id}`);
  };

  return (
    <RecipeCardStyled>
      <Image
        to={`/recipe/${_id}`}
        className="recipe-image"
        url={`${owner ? `${BACKEND_URL}/` : ``}${preview}`}
      ></Image>
      <Wrapper>
        <Top>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <DeleteButton>
            <svg onClick={() => deleteRecipe(_id)}>
              <use href={`${Sprite}#icon-trash`}></use>
            </svg>
          </DeleteButton>
        </Top>
        <Bottom>
          <Time>{time}</Time>
          <Button className="type6" onClick={() => navigateToRecipe(_id)}>
            See recipe
          </Button>
        </Bottom>
      </Wrapper>
    </RecipeCardStyled>
  );
};

export default RecipeCard;
