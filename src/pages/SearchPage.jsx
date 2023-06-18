import Filter from 'components/Filter/Filter';
import SearchResults from 'components/SearchResults/SearchResults';
import Searchbar from 'components/Searchbar/Searchbar';
import { PageContainer } from 'components/Styled/PageContainer.styled';
import { PageTitle } from 'components/Styled/PageTitle.styled';

const SearchPage = () => {
  return (
    <PageContainer>
      <PageTitle>Search</PageTitle>
      <Searchbar />
      <Filter />
      <SearchResults />
    </PageContainer>
  );
};

export default SearchPage;
