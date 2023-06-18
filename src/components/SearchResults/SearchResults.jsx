import RecipeThumb from 'components/Recipes/RecipeThumb';
import { useDispatch, useSelector } from 'react-redux';
import { SearchResultsStyled } from './SearchResults.styled';
import { useState } from 'react';
import { findRecipes } from 'redux/recipes/operations';
import Pagination from 'components/Pagination/Pagination';
import { selectSearchRecipes } from 'redux/recipes/selectors';

const SearchResults = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearchRecipes);
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const { recipes, filter, query, total } = search;

  const handlePage = page => {
    setPage(page);
    dispatch(findRecipes({ filter, query, page, limit }));
  };

  return (
    <>
      <SearchResultsStyled>
        {recipes &&
          recipes.map((recipe, key) => (
            <RecipeThumb key={key} recipe={recipe} />
          ))}
      </SearchResultsStyled>
      {recipes && (
        <Pagination
          total={Math.ceil(total / limit)}
          page={page}
          handlePage={handlePage}
        />
      )}
    </>
  );
};

export default SearchResults;
