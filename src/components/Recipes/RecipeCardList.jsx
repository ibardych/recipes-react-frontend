import { RecipeCardListStyled } from './RecipeCardList.styled';
import RecipeCard from './ResipeCard';

const RecipeCardList = ({ recipes }) => {
  return (
    <RecipeCardListStyled>
      {recipes.map((recipe, key) => (
        <RecipeCard key={key} recipe={recipe} />
      ))}
    </RecipeCardListStyled>
  );
};

export default RecipeCardList;
