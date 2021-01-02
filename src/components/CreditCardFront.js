import React from 'react';
import './CreditCardFront.css';
import { connect } from 'react-redux';

class CreditCardFront extends React.Component {
  handleNumber() {
    let cardNumber = this.props.number;
    const defaultNumber = '#### #### #### ####'

    cardNumber = cardNumber + defaultNumber.slice(cardNumber.length)

    for (let i = 5; i <= 13; i++) {
      if (cardNumber[i] !== '#' && i !== 9) {
        cardNumber = cardNumber.slice(0, i) + '*' + cardNumber.slice(i + 1)
      }
    }

    return cardNumber
  }

  renderClass() {
    switch (this.props.side) {
      case 'front':
        return 'credit-card-front rotate-in';
      case 'back':
        return 'credit-card-front rotate-out';
      default:
        return 'credit-card-front';
    }
  }

  render() {
    return (
      <div className={this.renderClass()}>
        <div className='credit-card-chip-logo'>
          <div className='credit-card-chip'>
            <img src='https://i.imgur.com/H8OIrbN.png' alt='cc-chip' height='40px' width='auto'></img>
          </div>
          <img src={this.props.issuer} alt='cc-issuer' height='80px' width='auto'></img>
        </div>
        <div className={`credit-card-number ${this.props.focus === 'number' ? 'focus' : ''}`}>
          {this.handleNumber()}
        </div>
        <div className='holder-expiration'>
          <div className={`credit-card-holder ${this.props.focus === 'name' ? 'focus' : ''}`}>
            <div className="card-text">Card Holder</div>
            <div className='holder-name'>
              {this.props.name}
            </div>
          </div>
          <div className={`credit-card-expiration ${this.props.focus === 'expiration' ? 'focus' : ''}`}>
            <div className="card-text">Expires</div>
            {this.props.expMonth}/{this.props.expYear}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.number || '#### #### #### ####',
    name: state.name || 'JOHN SMITH',
    expMonth: state.month || '00',
    expYear: state.year || '00',
    side: state.side,
    issuer: state.issuer,
    focus: state.focus
  }
}

export default connect(mapStateToProps)(CreditCardFront);
