import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOwnRecipe, getOwnRecipes } from 'redux/ownRecipes/operations';
import { selectOwnRecipes } from 'redux/ownRecipes/selectors';
import { MyRecipesStyled } from './MyRecipes.styled';
import RecipeCard from 'components/Recipes/RecipeCard';
import { LoaderSmall } from 'components/Loader/Loader';
import { useState } from 'react';
import NoItems from 'components/NoItems/NoItems';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectOwnRecipes);
  const ownRecipesLoading = useSelector(
    state => state.ownRecipes.ownRecipesLoading
  );
  const [recipeLoading, setRecipeLoading] = useState([]);

  const removeRecipeLoading = recipeId => {
    setRecipeLoading(prev => prev.filter(id => id !== recipeId));
  };

  useEffect(() => {
    dispatch(getOwnRecipes());
  }, [dispatch]);

  const deleteRecipe = async id => {
    if (recipeLoading.includes(id)) return;
    setRecipeLoading([...recipeLoading, id]);
    await dispatch(deleteOwnRecipe(id));
    removeRecipeLoading(id);
  };

  return (
    <>
      <MyRecipesStyled className={!recipes.length ? 'no-items' : ''}>
        {ownRecipesLoading ? (
          <LoaderSmall scale="1" top="100px" />
        ) : (
          !!recipes.length &&
          recipes.map((recipe, key) => (
            <RecipeCard
              key={key}
              recipe={recipe}
              handleDeleteRecipe={deleteRecipe}
              recipeLoading={recipeLoading}
            />
          ))
        )}
      </MyRecipesStyled>
      {!recipes.length && !ownRecipesLoading && (
        <NoItems>You don't have any recipes yet.</NoItems>
      )}
    </>
  );
};

export default MyRecipes;
