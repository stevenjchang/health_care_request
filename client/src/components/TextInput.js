import React from 'react';
import { withFormik, Form, Field } from 'formik';
import _get from 'lodash.get';
import PropTypes from 'prop-types';

const styles = {
  position: 'absolute',
  border: '2.5px solid blue',
}

const customHandleChange = (e) => {
  console.log('e ==>', e.target.value);
}

const customHandleBlur = (e) => {
  console.log('e ==>', e.target.value);
}

const TextInput = ({ id, style, customHandleBlur }) => {
  let combineStyles = { ...styles, ...style };

  return (
    <>
      <Field
        type="text"
        name={id}
        value={style.content}
        onBlur={(e) => {customHandleBlur(e, id)}}
        style={combineStyles}
      />
    </>
  )
}

const TextInputWithFormik = withFormik({
  mapPropsToValues(props) {
    console.log('content ==>', _get(props, 'styles.content'));
    return {
      content: _get(props, 'styles.content') || '',
      customHandleBlur: _get(props, 'customHandleBlur'),
    }
  },

})(TextInput);

export default TextInputWithFormik;

// const Formik = withFormik({
//   mapPropsToValues({ email, password }) {
//     return {
//       email: email || '',
//       password: password || '',
//     }
//   },
//   handleSubmit(values) {
//     setTimeout(() => {
//       if (values.email === 'example@email.com') {
//         setErrors({ email: 'That email is already taken' });
//       } else {
//         resetForm();
//       }
//       setSubmitting(false);
//     }, 2000)
//   },
// })();
