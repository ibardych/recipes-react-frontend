import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnRecipes } from 'redux/ownRecipes/operations';
import { selectOwnRecipes } from 'redux/ownRecipes/selectors';
import { MyRecipesStyled } from './MyRecipes.styled';
import RecipeCard from 'components/Recipes/RecipeCard';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectOwnRecipes);

  useEffect(() => {
    dispatch(getOwnRecipes());
  }, [dispatch]);

  return (
    <MyRecipesStyled>
      {recipes.map((recipe, key) => (
        <RecipeCard key={key} recipe={recipe} />
      ))}
    </MyRecipesStyled>
  );
};

export default MyRecipes;
