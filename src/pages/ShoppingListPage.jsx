import Deco from 'components/Deco/Deco';
import ShoppingList from 'components/ShoppingList/ShoppingList';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';

const ShoppingListPage = () => {
  return (
    <PageContainer>
      <Deco />
      <PageTitle>Shopping list</PageTitle>
      <ShoppingList />
    </PageContainer>
  );
};

export default ShoppingListPage;
