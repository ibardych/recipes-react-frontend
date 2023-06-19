import Deco from 'components/Deco/Deco';
import MyRecipes from 'components/MyRecipes/MyRecipes';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';

const MyRecipesPage = () => {
  return (
    <PageContainer>
      <Deco />
      <PageTitle>My recipes</PageTitle>
      <MyRecipes />
    </PageContainer>
  );
};

export default MyRecipesPage;
