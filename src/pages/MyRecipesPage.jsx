import RecipeCardList from 'components/Recipes/RecipeCardList';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOwnRecipes } from 'redux/ownRecipes/operations';
import { selectOwnRecipes } from 'redux/ownRecipes/selectors';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(selectOwnRecipes);

  useEffect(() => {
    dispatch(getOwnRecipes());
  }, [dispatch]);

  return (
    <PageContainer>
      <PageTitle>My recipes</PageTitle>
      <RecipeCardList recipes={recipes} />
    </PageContainer>
  );
};

export default MyRecipes;
