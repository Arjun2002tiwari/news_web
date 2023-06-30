import React from 'react';
import l from './loading.gif';

const Spinner = () => {
  return (
    <div>
      <img src={l} alt="loading" />
    </div>
  );
};

export default Spinner;
