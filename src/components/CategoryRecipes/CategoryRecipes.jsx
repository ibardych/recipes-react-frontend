import Pagination from 'components/Pagination/Pagination';
import Recipes from 'components/Recipes/Recipes';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getRecipesByCategory } from 'redux/recipes/operations';
import {
  selectCategories,
  selectRecipesByCategory,
} from 'redux/recipes/selectors';
import { CategoryRecipesStyled } from './CategoryRecipes.styled';
import { scrollToTop } from 'helpers';
import { LoaderSmall } from 'components/Loader/Loader';

const CategoryRecipes = ({ resetePage, setResetPage }) => {
  const dispatch = useDispatch();
  const { recipes, total } = useSelector(selectRecipesByCategory);
  const categories = useSelector(selectCategories);
  const navigate = useNavigate();
  let { category } = useParams();
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const loading = useSelector(state => state.recipes.recipesByCategoryLoading);

  useEffect(() => {
    if (resetePage) {
      setPage(1);
      setResetPage(false);
    }

    if (!category && categories.length) {
      navigate(`/categories/${categories[0].name}`);
    }

    if (category) {
      dispatch(getRecipesByCategory({ category, page, limit }));
    }
  }, [
    dispatch,
    categories,
    category,
    navigate,
    page,
    limit,
    resetePage,
    setResetPage,
  ]);

  const handlePage = page => {
    setPage(page);
    dispatch(getRecipesByCategory({ category, page, limit }));
    scrollToTop();
  };

  return (
    <>
      <CategoryRecipesStyled>
        {loading ? (
          <LoaderSmall scale="1" name="" top="100px" />
        ) : (
          recipes && <Recipes recipes={recipes} />
        )}
      </CategoryRecipesStyled>
      {!loading && recipes && (
        <Pagination
          total={Math.ceil(total / limit)}
          page={page}
          handlePage={handlePage}
        />
      )}
    </>
  );
};

export default CategoryRecipes;
