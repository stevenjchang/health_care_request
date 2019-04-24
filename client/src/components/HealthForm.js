import React, { Component } from 'react';
import AddInputFieldContainer from '../containers/AddInputFieldContainer';
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
  constructor(props) {
    super(props)
    this.recursivelyRenderChildren = this.recursivelyRenderChildren.bind(this);
  }

  componentDidMount() {
    this.props.fetchFormData();
  }

  recursivelyRenderChildren(item) {
    if (!item.items) return (
      <TextInput
        id={item.id}
        style={item}
      />
    )
    return [(
      <TextInput
      id={item.id}
      style={item}
    />)].concat(item.items.map(this.recursivelyRenderChildren))
  }

  render() {
    let { formData, customHandleBlur } = this.props;
    return (
      <div style={pdfStyles}>
      {
        Object.keys(formData).map(id => (
          <>
            {/* <TextInput
              style={formData[id]}
              id={id}
              key={id}
              customHandleBlur={customHandleBlur}
            /> */}
            {
              this.recursivelyRenderChildren(formData[id])
            }
          </>
        ))
      }
      <AddInputFieldContainer />
      </div>
    );
  }
}

export default HealthForm;
