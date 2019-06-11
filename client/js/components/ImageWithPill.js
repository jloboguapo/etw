import React from 'react';
import PropTypes from 'prop-types';
import CategoryPill from './CategoryPill';

const ImageWithPills = props => {
  const { imageClass } = props;
  return (
    <div className={`insights-images ${imageClass}`}>
      <CategoryPill width={130} height={60} textPosition={18} />
    </div>
  );
};

ImageWithPills.propTypes = {
  imageClass: PropTypes.string.isRequired
};

export default ImageWithPills;
