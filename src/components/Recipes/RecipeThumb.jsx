import { RecipeThumbStyled } from './RecipeThumb.styled';
import BACKEND_URL from 'constants/backend.url';

const RecipeThumb = ({ recipe }) => {
  const { _id, title, owner, thumb } = recipe;

  return (
    <RecipeThumbStyled
      to={`/recipe/${_id}`}
      url={`${owner ? `${BACKEND_URL}/` : ``}${thumb}`}
    >
      <div className="title">{title}</div>
    </RecipeThumbStyled>
  );
};

export default RecipeThumb;
