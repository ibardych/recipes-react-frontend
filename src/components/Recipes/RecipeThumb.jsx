import { RecipeThumbStyled } from './RecipeThumb.styled';

const RecipeThumb = ({ recipe }) => {
  const { _id, title, thumb } = recipe;

  return (
    <RecipeThumbStyled to={`/recipe/${_id}`} url={thumb}>
      <div className="title">{title}</div>
    </RecipeThumbStyled>
  );
};

export default RecipeThumb;
