import { RecipeThumbStyled } from './Recipes.styled';

const RecipeThumb = ({ recipe }) => {
  return (
    <RecipeThumbStyled>
      <img src={recipe.thumb} alt="recipe" />
      <div className="title">{recipe.title}</div>
    </RecipeThumbStyled>
  );
};

export default RecipeThumb;
