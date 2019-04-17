import React from 'react';
import { withFormik, Form, Field } from 'formik';
import _get from 'lodash.get';
import PropTypes from 'prop-types';

const formStyles = {
  position: 'absolute',
  border: '2.5px solid blue',
}


// const TextInput = ({ id, style, customHandleBlur }) => {

// }

// const TextInputWithFormik = withFormik({
//   mapPropsToValues(props) {
//     console.log('content ==>', _get(props, 'styles.content'));
//     return {
//       content: _get(props, 'styles.content') || '',
//       customHandleBlur: _get(props, 'customHandleBlur'),
//     }
//   },

// })(TextInput);

// export default TextInputWithFormik;

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' }
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // this.setState({ input: this.props.style.content });
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
