import { useEffect } from 'react';
import { FavoriteRecipesStyled } from './FavoriteRecipes.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteRecipes } from 'redux/recipes/selectors';
import { getFavoriteRecipes } from 'redux/recipes/operations';
import RecipeCard from 'components/Recipes/RecipeCard';
import Pagination from 'components/Pagination/Pagination';
import { useState } from 'react';
import { LoaderSmall } from 'components/Loader/Loader';
import { scrollToTop } from 'helpers';
import { removeRecipeFromFavorite } from 'redux/user/operations';
import { selectFavoriteRecipeIds } from 'redux/user/selectors';
import NoItems from 'components/NoItems/NoItems';

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const favoriteRecipeIds = useSelector(selectFavoriteRecipeIds);
  const { recipes, total } = useSelector(selectFavoriteRecipes);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const favoriteRecipesLoading = useSelector(
    state => state.recipes.favoriteRecipesLoading
  );
  const [recipeLoading, setRecipeLoading] = useState([]);

  const removeRecipeLoading = recipeId => {
    setRecipeLoading(prev => prev.filter(id => id !== recipeId));
  };

  useEffect(() => {
    dispatch(getFavoriteRecipes({ page, limit }));
  }, [dispatch, page, limit]);

  const handlePage = page => {
    setPage(page);
    dispatch(getFavoriteRecipes({ page, limit }));
    scrollToTop();
  };

  const deleteRecipe = async id => {
    if (recipeLoading.includes(id)) return;
    setRecipeLoading([...recipeLoading, id]);
    await dispatch(removeRecipeFromFavorite(id));
    removeRecipeLoading(id);
  };

  return (
    <>
      <FavoriteRecipesStyled className={!recipes.length ? 'no-items' : ''}>
        {favoriteRecipesLoading ? (
          <LoaderSmall scale="1" top="100px" />
        ) : (
          <>
            {!!recipes.length &&
              recipes.map((recipe, key) => {
                return (
                  favoriteRecipeIds.includes(recipe._id) && (
                    <RecipeCard
                      key={key}
                      recipe={recipe}
                      handleDeleteRecipe={deleteRecipe}
                      recipeLoading={recipeLoading}
                    />
                  )
                );
              })}
          </>
        )}
      </FavoriteRecipesStyled>
      {!favoriteRecipesLoading && !!recipes.length && (
        <Pagination
          total={Math.ceil(total / limit)}
          page={page}
          handlePage={handlePage}
        />
      )}
      {recipes.length === 0 && !favoriteRecipesLoading && (
        <NoItems>You don't have any favorite recipes yet.</NoItems>
      )}
    </>
  );
};

export default FavoriteRecipes;
