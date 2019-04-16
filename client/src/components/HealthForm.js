import React, { Component } from 'react';
import TextInput from './TextInput';

import { pdf_1_url } from '../config/pdf_url';

const styles = {
  backgroundImage: `url(${pdf_1_url})`,
  backgroundSize: 'contain',
  height: '1600px',
  width: '1200px',
  margin: '0 auto',
}

const passDownProps = {
  top: '200px',
  left: '300px',
  height: '30px',
  width: '100px'
}

class HealthForm extends Component {
  render() {
    return (
      <div style={styles}>
        <TextInput
          style={passDownProps}
        ></TextInput>
      </div>
    );
  }
}

export default HealthForm;
