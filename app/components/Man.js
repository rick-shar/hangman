import React from 'react';
import imgUrls from '../data/data';
import PropTypes from 'prop-types';

const Man = ({ stepNumber, onNext }) => {
    return (
      <div>
        <p>{stepNumber}</p>
        <img src={imgUrls[stepNumber]}/>
        <button onClick={onNext}>Next</button>
      </div>
  );
};

Man.propTypes = {
    stepNumber: PropTypes.number,
    onNext: PropTypes.func
};

export default Man;
