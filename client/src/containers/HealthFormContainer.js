import { connect } from 'react-redux';

import { fetchFormData } from '../actions';
import HealthForm from '../components/HealthForm';

const mapStateToProps = (state) => ({
  formData: state.healthForm.formData || [],
});

const mapDispatchToProps = (dispatch) => ({
  fetchFormData: () => dispatch(fetchFormData()),
});

const HealthFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HealthForm);

export default HealthFormContainer;
