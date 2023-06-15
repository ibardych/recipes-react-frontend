import CategoryNavi from 'components/CategoryNavi/CategoryNavi';
import Recipes from 'components/Recipes/Recipes';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipesByCategory } from 'redux/recipes/operations';
import {
  selectCategories,
  selectRecipesByCategory,
} from 'redux/recipes/selectors';

const Categories = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectRecipesByCategory);
  const categories = useSelector(selectCategories);
  let { category } = useParams();

  useEffect(() => {
    let categoryName = category;
    if (!category && categories.length) {
      categoryName = categories[0].name;
    }
    if (categoryName) {
      dispatch(getRecipesByCategory(categoryName));
    }
  }, [dispatch, categories, category]);

  return (
    <PageContainer>
      <PageTitle>Categories</PageTitle>
      <CategoryNavi />
      <Recipes recipes={recipes} />
    </PageContainer>
  );
};

export default Categories;
