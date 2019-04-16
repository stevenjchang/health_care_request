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

const passDownProps1 = {
  top: '180px',
  left: '280px',
  height: '30px',
  width: '472px'
}

const passDownProps2 = {
  top: '180px',
  left: '773px',
  height: '30px',
  width: '188px'
}

class HealthForm extends Component {
  render() {
    return (
      <div style={styles}>
        <TextInput
          style={passDownProps1}
        ></TextInput>
        <TextInput
          style={passDownProps2}
        ></TextInput>
      </div>
    );
  }
}

export default HealthForm;
