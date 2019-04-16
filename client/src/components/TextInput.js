import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  position: 'absolute',
  border: '2.5px solid blue',
}

const TextInput = ({ style }) => {
  let combineStyles = Object.assign(styles, style);
  return (
    <>
      <input type="text" style={combineStyles} />
    </>
  )
}

TextInput.propTypes = {
}

export default TextInput;
