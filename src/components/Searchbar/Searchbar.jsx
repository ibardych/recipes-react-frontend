import { useState } from 'react';
import { Button, FormStyled, Input, SearchbarStyled } from './Searchbar.styled';

const Searchbar = () => {
  const [query, setQuery] = useState('');

  const submitHandler = e => {
    e.preventDefault();
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchbarStyled>
      <FormStyled onSubmit={submitHandler}>
        <Input
          name="searchQuery"
          type="text"
          value={query}
          placeholder="Enter the text"
          onChange={handleInputChange}
        />
        <Button type="submit">Search</Button>
      </FormStyled>
    </SearchbarStyled>
  );
};

export default Searchbar;
