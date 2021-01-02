import React from 'react';
import './Form.css';
import { connect } from 'react-redux';
import {
  changeNumber,
  changeName,
  changeMonth,
  changeYear,
  changeCvv,
  changeSide,
  changeIssuer,
  changeFocus
} from '../actions';

class Form extends React.Component {
  render() {
    return (
      <form className='form'>
        Card Number<br/>
        <input
          id='input-number'
          type='text'
          maxLength='19'
          value={this.props.number}
          onChange={(e) => {
            this.props.changeNumber(e.target.value);
            this.props.changeIssuer(e.target.value);
          }}
          onFocus={() => this.props.changeFocus('number')}
          onBlur={() => this.props.changeFocus('')}
        />
        <br/>Card Holder<br/>
        <input
          id='input-name'
          type='text'
          maxLength='18'
          onChange={(e) => this.props.changeName(e.target.value)}
          onFocus={() => this.props.changeFocus('name')}
          onBlur={() => this.props.changeFocus('')}
        />
        <div className='form-expiration-cvv'>
          <div className='form-expiration'>
            <br/>Expiration Date<br/>
            <div className='form-expiration-select'>
              <select
                id='input-month'
                name='month'
                defaultValue='Month'
                onChange={(e) => this.props.changeMonth(e.target.value)}
                onFocus={() => this.props.changeFocus('expiration')}
                onBlur={() => this.props.changeFocus('')}
              >
                <option defaultValue disabled>Month</option>
                <option value='01'>January</option>
                <option value='02'>February</option>
                <option value='03'>March</option>
                <option value='04'>April</option>
                <option value='05'>May</option>
                <option value='06'>June</option>
                <option value='07'>July</option>
                <option value='08'>August</option>
                <option value='09'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
              <select
                id='input-year'
                name='year'
                defaultValue='Year'
                onChange={(e) => this.props.changeYear(e.target.value)}
                onFocus={() => this.props.changeFocus('expiration')}
                onBlur={() => this.props.changeFocus('')}
              >
                <option defaultValue disabled>Year</option>
                <option value='21'>2021</option>
                <option value='22'>2022</option>
                <option value='23'>2023</option>
                <option value='24'>2024</option>
                <option value='25'>2025</option>
                <option value='26'>2026</option>
                <option value='27'>2027</option>
                <option value='28'>2028</option>
                <option value='29'>2029</option>
                <option value='30'>2030</option>
                <option value='31'>2031</option>
              </select>
            </div>
          </div>
          <div className='form-cvv'>
            <br/>cvv<br/>
            <input
              id='input-cvv'
              type='text'
              maxLength='4'
              onChange={(e) => this.props.changeCvv(e.target.value)}
              onFocus={() => this.props.changeSide('back')}
              onBlur={() => this.props.changeSide('front')}
            />
          </div>
        </div>
        <div className='form-button'>
          <button onClick={(e) => e.preventDefault()}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { number: state.number}
}

export default connect(mapStateToProps,
  {
    changeNumber,
    changeName,
    changeMonth,
    changeYear,
    changeCvv,
    changeSide,
    changeIssuer,
    changeFocus
  })(Form);
