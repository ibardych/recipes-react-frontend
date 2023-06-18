import { useDispatch, useSelector } from 'react-redux';
import { CategoriesPreviewStyled } from './CategoriesPreview.styled';
import { selectRecipesMainPage } from 'redux/recipes/selectors';
import { useEffect, useMemo } from 'react';
import { getRecipesByCategoryList } from 'redux/recipes/operations';
import Category from './Category';
import { ButtonLink } from 'components/Styled';

const CategoriesPreview = () => {
  const dispatch = useDispatch();
  const categories = useMemo(
    () => ['Breakfast', 'Miscellaneous', 'Vegan', 'Dessert'],
    []
  );
  const recipes = useSelector(selectRecipesMainPage);

  useEffect(() => {
    dispatch(getRecipesByCategoryList({ categories: categories }));
  }, [dispatch, categories]);

  return (
    <CategoriesPreviewStyled>
      {recipes &&
        recipes.map((category, index) => (
          <Category
            key={index}
            categoryName={categories[index]}
            category={category}
            last={index + 1 === recipes.length}
          />
        ))}
      <div className="other-button-wrapper">
        <ButtonLink to={`/categories`} className="type4">
          Ohter categories
        </ButtonLink>
      </div>
    </CategoriesPreviewStyled>
  );
};

export default CategoriesPreview;
