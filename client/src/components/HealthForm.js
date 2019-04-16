import React, { Component } from 'react';
import TextInput from './TextInput';

import { pdf_1_url } from '../config/pdf_url';

const pdfStyles = {
  backgroundImage: `url(${pdf_1_url})`,
  backgroundSize: 'contain',
  height: '1600px',
  width: '1200px',
  margin: '0 auto',
}


class HealthForm extends Component {
  componentDidMount() {
    this.props.fetchFormData();
  }

  render() {
    let { formData } = this.props;
    return (
      <div style={pdfStyles}>
      {
        formData.map(item => (
          <TextInput style={item} key={item.id} />
        ))
      }
      </div>
    );
  }
}

export default HealthForm;
