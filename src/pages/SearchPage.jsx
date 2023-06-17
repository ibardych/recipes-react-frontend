import Filter from 'components/Filter/Filter';
import RecipeThumb from 'components/Recipes/RecipeThumb';
import Searchbar from 'components/Searchbar/Searchbar';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';
import { useSelector } from 'react-redux';
import { selectSearch } from 'redux/user/selectors';

const SearchPage = () => {
  const search = useSelector(selectSearch);

  return (
    <PageContainer>
      <PageTitle>Search</PageTitle>
      <Searchbar />
      <Filter />
      {search.recipes &&
        search.recipes.map((recipe, key) => (
          <RecipeThumb key={key} recipe={recipe} />
        ))}
    </PageContainer>
  );
};

export default SearchPage;
