import axios from 'axios';

const defaultFormName = 'pdf_1'
const jsonFromApi = {
  formName: 'pdf_1',
  formData: {
    'input_1': {
      top: '180px',
      left: '280px',
      height: '30px',
      width: '472px',
      type: 'text',
      content: 'steve',
    },
    'input_2': {
      top: '180px',
      left: '773px',
      height: '30px',
      width: '188px',
      type: 'phone',
    }
  }
}

export const fetchFormData = () => {
  // const form_name = formName || defaultFormName;
  const data = jsonFromApi;
  return (dispatch) => {
    dispatch({ type: 'SET_FORM_DATA', data });
  }
}

export const customHandleBlur = (value, id) => {
  const data = { id, value };
  return (dispatch) => {
    dispatch({ type: 'SET_TEXT_INPUT_FIELD', data })
  }
}

export const addInputField = (id, style) => {
  const data = { id, style };
  console.log('data ==>', data);
  return (dispatch) => {
    dispatch({ type: 'ADD_INPUT_FIELD', data });
  }
}
