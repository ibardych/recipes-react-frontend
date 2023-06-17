import { RecipeThumbStyled } from './Recipes.styled';

const RecipeThumb = ({ recipe }) => {
  return (
    <RecipeThumbStyled to={`/recipe/${recipe._id}`}>
      <img src={recipe.thumb} alt="recipe" />
      <div className="title">{recipe.title}</div>
    </RecipeThumbStyled>
  );
};

export default RecipeThumb;
