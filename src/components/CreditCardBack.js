import React from 'react';
import './CreditCardBack.css';
import { connect } from 'react-redux';

class CreditCardBack extends React.Component {
  renderClass() {
    switch (this.props.side) {
      case 'front':
        return 'credit-card-back rotate-out';
      case 'back':
        return 'credit-card-back rotate-in';
      default:
        return 'credit-card-back';
    }
  }

  render() {
    return (
      <div className={this.renderClass()}>
        <div className='magstripe'></div>
        <div className='credit-card-back-cvv'>
          <div className="card-text">CVV</div>
          <div className='credit-card-back-cvv-number'>
            {this.props.cvv}
          </div>
        </div>
        <div className='credit-card-back-logo'>
          <img src={this.props.issuer} alt='cc-issuer' height='80px' width='auto'></img>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cvv: state.cvv || '000',
    side: state.side,
    issuer: state.issuer
  }
}

export default connect(mapStateToProps)(CreditCardBack);
