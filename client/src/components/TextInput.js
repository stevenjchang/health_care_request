import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  position: 'absolute',
  border: '2.5px solid blue',
  top: '200px',
  left: '300px',
  height: '30px',
  width: '100px'
}

const TextInput = () => {
  return (
    <>
      <input type="text" style={styles} />
    </>
  )
}

TextInput.propTypes = {
}

export default TextInput;
