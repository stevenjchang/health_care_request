const healthForm = (state = [], action) => {
  switch (action.type) {
    case 'SET_FORM_DATA':
      return action.data;
    default:
      return state;
  }
}

export default healthForm;
