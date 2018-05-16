import Redux from 'redux';

var clickCounter = (state = 0, action) => {
  switch (action.type) {
  case 'UPDATE_COUNT':
    return action.clickCount; //create a new array with es6
  default:
    return state;
  }
};

export default clickCounter;