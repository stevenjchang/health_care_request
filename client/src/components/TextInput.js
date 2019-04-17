import React from 'react';
import { withFormik, Form, Field } from 'formik';
import _get from 'lodash.get';
import PropTypes from 'prop-types';

const formStyles = {
  position: 'absolute',
  border: '2.5px solid blue',
}


class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    this.setState({ input: this.props.style.content });
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
  }

  render() {
    let { id, style, customHandleBlur } = this.props;
    let combineStyles = { ...formStyles, ...style };

    return (
      <>
        <input
          type="text"
          name={id}
          value={this.state.input}
          onChange={this.handleChange}
          onBlur={() => {customHandleBlur(this.state.input, id)}}
          style={combineStyles}
        />
      </>
    )
  }
}

export default TextInput;
