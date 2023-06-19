import { Button } from 'components/Styled';
import BACKEND_URL from 'constants/backend.url';
import { useNavigate } from 'react-router-dom';
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
import { LoaderSmall } from 'components/Loader/Loader';

const RecipeCard = ({
  recipe,
  type,
  handleDeleteRecipe,
  recipeLoading = [],
}) => {
  const navigate = useNavigate();
  const { _id, owner, preview, description, title, time } = recipe;

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
            <svg onClick={() => handleDeleteRecipe(_id)}>
              <use href={`${Sprite}#icon-trash`}></use>
            </svg>
            {recipeLoading.includes(_id) && (
              <LoaderSmall name="delete-recipe" />
            )}
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
