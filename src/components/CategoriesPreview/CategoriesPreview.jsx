import { useDispatch, useSelector } from 'react-redux';
import { CategoriesPreviewStyled } from './CategoriesPreview.styled';
import { selectRecipesMainPage } from 'redux/recipes/selectors';
import { useEffect, useMemo } from 'react';
import { getRecipesByCategoryList } from 'redux/recipes/operations';
import Category from './Category';
import { Button } from 'components/Styled';

const CategoriesPreview = () => {
  const dispatch = useDispatch();
  // const [categories, setCategories] = useState([
  //   'Breakfast',
  //   'Miscellaneous',
  //   'Vegan',
  //   'Desserts',
  // ]);
  // const categories = useSelector(selectCategories);
  const categories = useMemo(
    () => ['Breakfast', 'Miscellaneous', 'Vegan', 'Dessert'],
    []
  );
  const recipes = useSelector(selectRecipesMainPage);

  console.log(recipes);

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
        <Button className="type4">Ohter categories</Button>
      </div>
    </CategoriesPreviewStyled>
  );
};

export default CategoriesPreview;
