/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = ({ collectionsCount, search }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };
  const resetInputField = () => {
    setSearchValue('');
  };
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    search(searchValue);
    resetInputField();
  };
  const style = {
    width: '30rem'
  };
  return (
    <Input
      icon="search"
      value={searchValue}
      placeholder={`Search ${collectionsCount} datasets`}
      onChange={handleChange}
      onKeyDown={(event) => event.key === 'Enter' ? handleSearchSubmit(event) : null}
      style={style}
    />
  );
};

export default SearchBar;
