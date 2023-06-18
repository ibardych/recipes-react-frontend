import { useLocation, useNavigate } from 'react-router-dom';
import { Button, FormStyled, Input, SearchbarStyled } from './Searchbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { findRecipes } from 'redux/recipes/operations';
import { selectSearchRecipes } from 'redux/recipes/selectors';
import { setSearchData } from 'redux/recipes/slice';

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const search = useSelector(selectSearchRecipes);

  const submitHandler = e => {
    e.preventDefault();
    if (location.pathname !== '/search') navigate('/search');
    const { filter, query } = search;
    dispatch(findRecipes({ filter, query, page: 1, limit: 8 }));
  };

  const handleInputChange = e => {
    dispatch(setSearchData({ query: e.target.value }));
  };

  return (
    <SearchbarStyled>
      <FormStyled onSubmit={submitHandler}>
        <Input
          name="searchQuery"
          type="text"
          value={search.query}
          placeholder="Enter the text"
          onChange={handleInputChange}
        />
        <Button type="submit">Search</Button>
      </FormStyled>
    </SearchbarStyled>
  );
};

export default Searchbar;
