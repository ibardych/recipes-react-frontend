import { useEffect } from 'react';
import { FavoriteRecipesStyled } from './FavoriteRecipes.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteRecipes } from 'redux/recipes/selectors';
import { getFavoriteRecipes } from 'redux/recipes/operations';
import RecipeCard from 'components/Recipes/ResipeCard';
import Paginator from 'components/Pagination/Pagination';
import { useState } from 'react';

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const { recipes, total } = useSelector(selectFavoriteRecipes);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);

  useEffect(() => {
    dispatch(getFavoriteRecipes({ page, limit }));
  }, [dispatch, page, limit]);

  const handlePage = page => {
    setPage(page);
    dispatch(getFavoriteRecipes({ page, limit }));
  };

  return (
    <>
      <FavoriteRecipesStyled>
        {recipes &&
          recipes.map((recipe, key) => (
            <RecipeCard key={key} recipe={recipe} />
          ))}
      </FavoriteRecipesStyled>
      {recipes && (
        <Paginator
          total={Math.ceil(total / limit)}
          page={page}
          handlePage={handlePage}
        />
      )}
    </>
  );
};

export default FavoriteRecipes;
