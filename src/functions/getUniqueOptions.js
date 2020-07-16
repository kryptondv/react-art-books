import React from 'react';

export default (items, value) => {
  // get unique options and sort
  let uniqueOptions = [...new Set(items.map(item => item[value]))];
  uniqueOptions.sort();
  uniqueOptions = ['wszystkie', ...uniqueOptions];
  // map to jsx
  return uniqueOptions.map(item => (
    <option className="form-group__option" value={item} key={item}>
      {item}
    </option>
  ));
};
