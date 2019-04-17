import { connect } from 'react-redux';

import { fetchFormData, customHandleBlur } from '../actions';
import HealthForm from '../components/HealthForm';

const mapStateToProps = (state) => ({
  formData: state.healthForm.formData || [],
});

const mapDispatchToProps = (dispatch) => ({
  fetchFormData: () => dispatch(fetchFormData()),
  customHandleBlur: (e, id) => dispatch(customHandleBlur(e, id)),
});

const HealthFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HealthForm);

export default HealthFormContainer;
