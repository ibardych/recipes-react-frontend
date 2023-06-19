import RecipeThumb from 'components/Recipes/RecipeThumb';
import { useDispatch, useSelector } from 'react-redux';
import { SearchResultsStyled } from './SearchResults.styled';
import { useState } from 'react';
import { findRecipes } from 'redux/recipes/operations';
import Pagination from 'components/Pagination/Pagination';
import { selectSearchRecipes } from 'redux/recipes/selectors';
import { LoaderSmall } from 'components/Loader/Loader';
import NoItems from 'components/NoItems/NoItems';

const SearchResults = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearchRecipes);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const { recipes, filter, query, total } = search;
  const loading = useSelector(state => state.recipes.searchRecipesLoading);

  const handlePage = page => {
    setPage(page);
    dispatch(findRecipes({ filter, query, page, limit }));
  };

  return (
    <>
      <SearchResultsStyled className={!recipes.length ? 'no-items' : ''}>
        {loading ? (
          <LoaderSmall scale="1" top="100px" />
        ) : (
          !!recipes.length &&
          recipes.map((recipe, key) => (
            <RecipeThumb key={key} recipe={recipe} />
          ))
        )}
      </SearchResultsStyled>
      {!loading && !!recipes.length && (
        <Pagination
          total={Math.ceil(total / limit)}
          page={page}
          handlePage={handlePage}
        />
      )}
      {!recipes.length && !loading && (
        <NoItems>Consider searching for something else.</NoItems>
      )}
    </>
  );
};

export default SearchResults;
