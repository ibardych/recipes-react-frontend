import Deco from 'components/Deco/Deco';
import FavoriteRecipes from 'components/FavoriteRecipes/FavoriteRecipes';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';

const FavoritePage = () => {
  return (
    <PageContainer>
      <Deco />
      <PageTitle>Favorites</PageTitle>
      <FavoriteRecipes />
    </PageContainer>
  );
};

export default FavoritePage;
