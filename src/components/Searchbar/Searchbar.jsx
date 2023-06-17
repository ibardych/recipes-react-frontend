import { useLocation, useNavigate } from 'react-router-dom';
import { Button, FormStyled, Input, SearchbarStyled } from './Searchbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { findRecipes } from 'redux/recipes/operations';
import { selectSearch } from 'redux/user/selectors';
import { setSearch } from 'redux/user/slice';

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const search = useSelector(selectSearch);

  const submitHandler = e => {
    e.preventDefault();
    if (location.pathname !== '/search') navigate('/search');
    const { filter, query } = search;
    dispatch(findRecipes({ filter, query })).then(({ payload }) => {
      dispatch(setSearch({ ...search, recipes: payload.recipes }));
    });
  };

  const handleInputChange = e => {
    dispatch(setSearch({ ...search, query: e.target.value }));
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
