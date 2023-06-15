import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';

const AddRecipe = () => {
  return (
    <PageContainer>
      <PageTitle>Add recipe</PageTitle>
      <AddRecipeForm />
    </PageContainer>
  );
};

export default AddRecipe;
