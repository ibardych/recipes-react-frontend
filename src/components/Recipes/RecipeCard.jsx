import BACKEND_URL from 'constants/backend.url';
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
import { ButtonLink } from 'components/Styled';

const RecipeCard = ({
  recipe,
  type,
  handleDeleteRecipe,
  recipeLoading = [],
}) => {
  const { _id, owner, preview, description, title, time } = recipe;

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
          <ButtonLink className="type6" to={`/recipe/${_id}`}>
            See recipe
          </ButtonLink>
        </Bottom>
      </Wrapper>
    </RecipeCardStyled>
  );
};

export default RecipeCard;
