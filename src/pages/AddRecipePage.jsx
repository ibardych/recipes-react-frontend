import AddRecipe from 'components/AddRecipe/AddRecipe';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';

const AddRecipePage = () => {
  return (
    <PageContainer>
      <PageTitle>Add recipe</PageTitle>
      <AddRecipe />
    </PageContainer>
  );
};

export default AddRecipePage;
