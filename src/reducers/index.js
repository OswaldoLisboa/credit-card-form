import { combineReducers } from 'redux';

const changeNumberReducer = (cardNumber = '', action) => {
  if (action.type === 'CHANGE_NUMBER') {
    return action.payload;
  }

  return cardNumber;
}

const changeNameReducer = (cardName = '', action) => {
  if (action.type === 'CHANGE_NAME') {
    return action.payload;
  }

  return cardName;
}

const changeMonthReducer = (cardMonth = '00', action) => {
  if (action.type === 'CHANGE_MONTH') {
    return action.payload;
  }

  return cardMonth;
}

const changeYearReducer = (cardYear = null, action) => {
  if (action.type === 'CHANGE_YEAR') {
    return action.payload;
  }

  return cardYear;
}

const changeCvvReducer = (cardCvv = null, action) => {
  if (action.type === 'CHANGE_CVV') {
    return action.payload;
  }

  return cardCvv;
}

const changeSideReducer = (cardSide = '', action) => {
  if (action.type === 'CHANGE_SIDE') {
    return action.payload;
  }

  return cardSide;
}

const changeIssuerReducer = (issuer = 'https://i.imgur.com/YnE0g9c.png', action) => {
  if (action.type === 'CHANGE_ISSUER') {
    return action.payload;
  }

  return issuer;
}

const changeFocusReducer = (focus = '', action) => {
  if (action.type === 'CHANGE_FOCUS') {
    return action.payload;
  }

  return focus;
}

export default combineReducers({
  number: changeNumberReducer,
  name: changeNameReducer,
  month: changeMonthReducer,
  year: changeYearReducer,
  cvv: changeCvvReducer,
  side: changeSideReducer,
  issuer: changeIssuerReducer,
  focus: changeFocusReducer
});
