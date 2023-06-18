import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopularRecipes } from 'redux/recipes/selectors';
import { getPopularRecipes } from 'redux/recipes/operations';
import { PopularRecipesStyled } from './PopularRecipes.styled';
import Pagination from 'components/Pagination/Pagination';
import { useState } from 'react';
import { scrollToTop } from 'helpers';
import { useRef } from 'react';
import { selectDeviceType } from 'redux/general/selectors';
import RecipePreview from 'components/Recipes/RecipePreview';

const PopularRecipes = () => {
  const dispatch = useDispatch();
  const deviceType = useSelector(selectDeviceType);
  const { recipes, total } = useSelector(selectPopularRecipes);
  const [top, setTop] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(4);
  const ref = useRef(null);

  useEffect(() => {
    dispatch(getPopularRecipes({ page, limit }));
  }, [dispatch, page, limit]);

  const handlePage = page => {
    setPage(page);
    dispatch(getPopularRecipes({ page, limit }));
    scrollToTop(top - (deviceType !== 'mobile' ? 100 : 100));
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const { top } = element.getBoundingClientRect();
      setTop(top);
    }
  }, [ref]);

  return (
    <>
      <PopularRecipesStyled
        ref={ref}
        className={deviceType === 'desktop' ? 'desktop' : ''}
      >
        {recipes &&
          recipes.map((recipe, key) => (
            <RecipePreview key={key} recipe={recipe} />
          ))}
      </PopularRecipesStyled>
      {recipes && deviceType !== 'desktop' && (
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
