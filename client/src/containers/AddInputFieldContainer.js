import { connect } from 'react-redux';

import { addInputField } from '../actions';
import AddInputField from '../components/AddInputField';

const mapStateToProps = (state) => ({
  formData: state.healthForm.formData || [],
});

const mapDispatchToProps = (dispatch) => ({
  addInputField: (id, styles) => dispatch(addInputField(id, styles)),
});

const AddInputFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddInputField);

export default AddInputFieldContainer;
