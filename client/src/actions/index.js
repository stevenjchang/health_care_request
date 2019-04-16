import axios from 'axios';

const defaultFormName = 'pdf_1'
const jsonFromApi = {
  formName: 'pdf_1',
  formData: [
    {
      id: 'input_1',
      top: '180px',
      left: '280px',
      height: '30px',
      width: '472px',
      type: 'text',
    },
    {
      id: 'input_2',
      top: '180px',
      left: '773px',
      height: '30px',
      width: '188px',
      type: 'phone',
    }
  ]
}

export const fetchFormData = () => {
  // const form_name = formName || defaultFormName;
  const data = jsonFromApi;
  return (dispatch, getState) => {
    dispatch({ type: 'SET_FORM_DATA', data });
  }
}

export const getPosts = () => {
  return (dispatch, getState) => {
    axios.get('/posts')
    .then((res) => res.data)
    .then((data) => {
      dispatch({ type: 'SET_POSTS', data });
    })
    .catch((err) => {
      dispatch({ type: 'GET_POSTS_ERROR', err });
    })
  }
};
