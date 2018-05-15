import Redux from 'redux';

var currentText = (state = '', action) => {

  switch (action.type) {
  case 'CHANGE_TEXT':
    return action.text;
  default:
    return state;
  }
};

export default currentText;