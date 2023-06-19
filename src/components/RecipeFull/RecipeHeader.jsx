import { useDispatch, useSelector } from 'react-redux';
import {
  RecipeDescription,
  RecipeHeaderStyled,
  RecipeTime,
  RecipeTitle,
} from './RecipeHeader.styled';
import { selectRecipe } from 'redux/recipes/selectors';
import { Button } from 'components/Styled';
import {
  addRecipeToFavorite,
  removeRecipeFromFavorite,
} from 'redux/user/operations';
import { selectFavoriteRecipeIds } from 'redux/user/selectors';
import { useEffect } from 'react';
import { useState } from 'react';
import Sprite from 'images/sprite.svg';
import { LoaderSmall } from 'components/Loader/Loader';

const RecipeHeader = () => {
  const dispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const favoriteRecipeIds = useSelector(selectFavoriteRecipeIds);
  const toggleFavoriteLoading = useSelector(
    state => state.user.toggleFavoriteLoading
  );
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    if (!favorite) dispatch(addRecipeToFavorite(recipe._id));
    if (favorite) dispatch(removeRecipeFromFavorite(recipe._id));
  };

  useEffect(() => {
    if (favoriteRecipeIds) {
      setFavorite(favoriteRecipeIds.some(recipeId => recipeId === recipe._id));
    }
  }, [favoriteRecipeIds, recipe]);

  return (
    <RecipeHeaderStyled>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeDescription>{recipe.description}</RecipeDescription>
      <Button type="button" className="type4" onClick={handleFavorite}>
        {favorite ? 'Remove from favorite recipes' : 'Add to favorite recipes'}
      </Button>
      {toggleFavoriteLoading && <LoaderSmall name="toggle-favorie" />}
      <RecipeTime>
        <svg className="icon">
          <use href={`${Sprite}#icon-clock`}></use>
        </svg>
        {recipe.time}
      </RecipeTime>
    </RecipeHeaderStyled>
  );
};

export default RecipeHeader;
