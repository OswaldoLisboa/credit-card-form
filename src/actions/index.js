const handleSpaces = (number) => {
  let cardNumber = number;

  if (cardNumber.length >= 4) {
    cardNumber = cardNumber.substr(0, 4) + ' ' + cardNumber.substr(4, cardNumber.length);
    if (cardNumber.length >= 9) {
      cardNumber = cardNumber.substr(0, 9) + ' ' + cardNumber.substr(9, cardNumber.length);
      if (cardNumber.length >= 14) {
        cardNumber = cardNumber.substr(0, 14) + ' ' + cardNumber.substr(14, cardNumber.length);
      }
    }
  }

  if (cardNumber[cardNumber.length - 1] === ' ') {
    cardNumber = cardNumber.substr(0, cardNumber.length - 1)
  }

  return cardNumber;
}

export const changeNumber = (number) => {
  number = number.replace(/[^\d]/g, '');

  number = handleSpaces(number);

  return {
    type: 'CHANGE_NUMBER',
    payload: number
  }
}

export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    payload: name.toUpperCase()
  }
}

export const changeMonth = (month) => {
  return {
    type: 'CHANGE_MONTH',
    payload: month
  }
}

export const changeYear = (year) => {
  return {
    type: 'CHANGE_YEAR',
    payload: year
  }
}

export const changeCvv = (cvv) => {
  return {
    type: 'CHANGE_CVV',
    payload: cvv
  }
}

export const changeSide = (side) => {
  return {
    type: 'CHANGE_SIDE',
    payload: side
  }
}

export const changeIssuer = (number) => {
  const ISSUER_URL = {
    amex: 'https://i.imgur.com/wd2KsW8.png',
    discover: 'https://i.imgur.com/NW5TFew.png',
    mastercard: 'https://i.imgur.com/a9b6cyt.png',
    visa: 'https://i.imgur.com/YnE0g9c.png'
  }

  let url = '';

  if (number.length >= 4 && number.substr(0, 4) === '6011') {
    url = ISSUER_URL.discover;
  } else if (number.length >= 2 && (number.substr(0, 2) === '34' || number.substr(0, 2) === '37')) {
    url = ISSUER_URL.amex;
  } else if (number.length >= 2 && parseInt(number.substr(0, 2), 10) >= 51 && parseInt(number.substr(0, 2), 10) <= 55) {
    url = ISSUER_URL.mastercard;
  } else {
    url = ISSUER_URL.visa;
  }

  return {
    type: 'CHANGE_ISSUER',
    payload: url
  }
}

export const changeFocus = (focus) => {
  return {
    type: 'CHANGE_FOCUS',
    payload: focus
  }
}
