import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { Title } from 'components/AddRecipeForm/AddRecipeForm.styled';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';

const AddRecipe = () => {
  return (
    <PageContainer>
      <PageTitle>Add recipe</PageTitle>
      <AddRecipeForm />
      <Title>Popular recipe</Title>
      <PopularRecipes />
    </PageContainer>
  );
};

export default AddRecipe;
