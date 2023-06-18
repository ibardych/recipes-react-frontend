import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopularRecipes } from 'redux/recipes/selectors';
import { getPopularRecipes } from 'redux/recipes/operations';
import RecipeCard from 'components/Recipes/RecipeCard';
import { PopularRecipesStyled } from './PopularRecipes.styled';
import Pagination from 'components/Pagination/Pagination';
import { useState } from 'react';

const PopularRecipes = () => {
  const dispatch = useDispatch();
  const { recipes, total } = useSelector(selectPopularRecipes);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);

  useEffect(() => {
    dispatch(getPopularRecipes({ page, limit }));
  }, [dispatch, page, limit]);

  const handlePage = page => {
    setPage(page);
    dispatch(getPopularRecipes({ page, limit }));
  };

  return (
    <>
      <PopularRecipesStyled>
        {recipes &&
          recipes.map((recipe, key) => (
            <RecipeCard key={key} recipe={recipe} />
          ))}
      </PopularRecipesStyled>
      {recipes && (
        <Pagination
          total={Math.ceil(total / limit)}
          page={page}
          handlePage={handlePage}
        />
      )}
    </>
  );
};

export default PopularRecipes;
