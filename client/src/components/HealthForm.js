import React, { Component } from 'react';
import { pdf_1_url } from '../config/pdf_url';

const styles = {
  backgroundImage: `url(${pdf_1_url})`,
  backgroundSize: 'contain',
  height: '1600px',
  width: '1200px',
  margin: '0 auto',
}


class HealthForm extends Component {
  render() {
    return (
      <div style={styles}>
      </div>
    );
  }
}

export default HealthForm;
