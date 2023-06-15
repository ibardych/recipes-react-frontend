// import PropTypes from 'prop-types';
import RecipeThumb from './RecipeThumb';
import { RecipesStyled } from './Recipes.styled';

const Recipes = ({ recipes }) => {
  return (
    <RecipesStyled>
      {recipes.map(recipe => (
        <RecipeThumb key={recipe._id} recipe={recipe} />
      ))}
    </RecipesStyled>
  );
};

export default Recipes;
