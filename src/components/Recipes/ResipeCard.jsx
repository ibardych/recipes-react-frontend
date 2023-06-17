import { Button } from 'components/Styled';
import BACKEND_URL from 'constants/backend.url';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteOwnRecipe } from 'redux/ownRecipes/operations';

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteRecipe = id => {
    dispatch(deleteOwnRecipe(id));
  };

  const navigateToRecipe = id => {
    navigate(`/recipe/${id}`);
  };

  return (
    <>
      <div>
        <img
          src={`${recipe.owner ? `${BACKEND_URL}/` : ``}${recipe.preview}`}
          alt={recipe.title}
        />
      </div>
      <div>{recipe._id}</div>
      <div>{recipe.title}</div>
      <div>{recipe.description}</div>
      <div onClick={() => deleteRecipe(recipe._id)}>Delete</div>
      <Button onClick={() => navigateToRecipe(recipe._id)}>See recipe</Button>
    </>
  );
};

export default RecipeCard;
