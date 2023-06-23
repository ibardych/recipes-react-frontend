import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Button,
  Error,
  FormStyled,
  Input,
  SearchbarStyled,
} from './Searchbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { findRecipes } from 'redux/recipes/operations';
import { selectSearchRecipes } from 'redux/recipes/selectors';
import { setSearchData } from 'redux/recipes/slice';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const search = useSelector(selectSearchRecipes);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState();
  const mounted = useRef(false);

  const URLparams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      dispatch(setSearchData({ query: '', total: null, recipes: [] }));
      if (search.total === null && URLparams.query) {
        const { filter } = search;
        dispatch(
          findRecipes({ filter, query: URLparams.query, page: 1, limit: 8 })
        );
      }
    }
  }, [URLparams, dispatch, search]);

  useEffect(() => {
    const query = URLparams.query ?? '';
    if (query && search.query !== query) {
      dispatch(setSearchData({ query }));
    }
  }, [URLparams, dispatch, search]);

  const submitHandler = e => {
    e.preventDefault();
    if (location.pathname !== '/search')
      navigate(`/search?query=${search.query}`);
    if (search.query) {
      setError('');
      const { filter, query } = search;
      dispatch(findRecipes({ filter, query, page: 1, limit: 8 }));
    } else {
      setError('Please enter search query.');
    }
  };

  const handleInputChange = e => {
    const query = e.target.value;
    if (location.pathname === '/search') {
      setSearchParams(query ? { query } : {});
    }
    dispatch(setSearchData({ query }));
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
      {error && <Error>{error}</Error>}
    </SearchbarStyled>
  );
};

export default Searchbar;
