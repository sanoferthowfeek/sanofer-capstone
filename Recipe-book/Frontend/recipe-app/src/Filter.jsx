import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {useNavigate} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: (option) => option.title,
});

export default function Filter() {
    const navigate = useNavigate();
  return (
    <Autocomplete
      id="filter-demo"
      options={menus}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      onChange={(event, option) => {
        if (option) {
          navigate(`/${option.title}`);
        }
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField  {...params} label="Search"  />}
    />
  );
}


const menus = [
  
  { title: 'All'},
  { title: 'Breakfast'},
  { title: 'Cool drinks'},
  { title: 'Dessert'},
  { title: 'Dinner'},
  { title: 'Lunch'},
  { title: 'Mojitos'},
  { title: 'Non-veg'},
  { title: 'Pasta'},
  { title: 'Salads'},
  { title: 'Soups'},
  { title: 'Veg-meal'},
 
];
