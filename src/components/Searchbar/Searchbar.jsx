import { useState, useEffect } from 'react';
import { SearchbarEl, Form, Button, Input } from './Searchbar.styled';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as SearchIcon } from '../../images/SearchIcon.svg';

const Searchbar = ({ onSubmit, searchQuery, setSearchParams }) => {
  const [value, setValue] = useState('');
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setValue(searchQuery);
  }, [searchQuery]);
  const handleChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      toast.error('Please enter the film name');
      return;
    }
    const queryString = value.trim().split(' ').join('+');
    setSearchParams({ query: queryString });
    onSubmit(value);
  };

  return (
    <>
      <SearchbarEl>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">
            <SearchIcon />
            {/* <span>Search</span> */}
          </Button>

          <Input onChange={handleChange} value={value} type="text" autoFocus />
        </Form>
      </SearchbarEl>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
