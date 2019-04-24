import axios from 'axios';

const jsonFromApi = {
  formName: 'pdf_1',
  formData: {
    'input_1': {
      id: 'input_1',
      top: '180px',
      left: '280px',
      height: '30px',
      width: '472px',
      type: 'text',
      items: [
        {
          id: 'input_3',
          top: '180px',
          left: '189px',
          height: '30px',
          width: '188px',
          type: 'phone',
        },
        {
          id: 'input_4',
          top: '180px',
          left: '389px',
          height: '30px',
          width: '188px',
          type: 'phone',
          items: [
            {
              id: 'input_5',
              top: '180px',
              left: '889px',
              height: '30px',
              width: '188px',
              type: 'phone',
            },
          ]
        },
      ]
    },
    'input_2': {
      id: 'input_2',
      top: '180px',
      left: '773px',
      height: '30px',
      width: '188px',
      type: 'phone',
    }
  }
}

export const fetchFormData = () => {
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
  return (dispatch) => {
    axios.post('/form_input', data)
    .then((res) => dispatch({ type: 'ADD_INPUT_FIELD', data }))
  }
}

export const addChildInput = (formData, targetId, newItem) => {

  return (dispatch) => {
    const findTarget = (item, targetId) => {
      if (item.id === targetId) item.items = [...(item.items || []), newItem];
      else if (item.items) {
        item.items.forEach((child) => {
          findTarget(child, targetId);
        })
      }
    }
    
    formData.forEach((child) => {
      findTarget(child, targetId);
    })
    dispatch({ type: 'ADD_CHILD_INPUT', formData });
  }


}
