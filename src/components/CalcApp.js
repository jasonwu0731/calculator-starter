import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      operator: '+',
      memory: 0,
      current_input: '',
      display_value:'0',
      last_is_equal: 0,
    };
    this.keyInNumber = this.keyInNumber.bind(this);
    this.keyInOperator = this.keyInOperator.bind(this);
    this.keyInEqual = this.keyInEqual.bind(this);
  }

  resetState() {
    // TODO
    this.setState({ display_value: '0' });
    this.setState({ operator: '+' });
    this.setState({ current_input: '' });
    this.setState({ memory: 0 });
    this.setState({ last_is_equal: 0 });
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  keyInNumber(number) {
    if(this.state.last_is_equal){
      this.setState({ display_value: number });
    }else{
      this.setState({ display_value: this.state.current_input.concat([number]) });
      this.setState({ current_input: this.state.current_input.concat([number]) });
    }
  }

  keyInOperator(op) {
    if (this.state.current_input != '') {
      const op_old = this.state.operator
      let temp = this.state.memory
      if (this.state.last_is_equal == 0){
        if(op_old == '+')
          temp = temp + parseFloat(this.state.current_input)
        else if(op_old == '-')
          temp = temp - parseFloat(this.state.current_input)
        else if(op_old == 'x')
          temp = temp * parseFloat(this.state.current_input)
        else if(op_old == '÷')
          temp = temp / parseFloat(this.state.current_input)
        else {
          console.log('Fuck keyInOperator')
        }
      }
      this.setState({ memory: temp });
      this.setState({ operator: op });
      this.setState({ display_value: temp });
      this.setState({ current_input: '' });
    } else {
      this.setState({ operator: op });
    }  
    this.setState({ last_is_equal: 0 });
  }

  keyInEqual(equal) {
    const op = this.state.operator
    let temp = this.state.memory
    if(op == '+')
      temp = temp + parseFloat(this.state.current_input)
    else if(op == '-')
      temp = temp - parseFloat(this.state.current_input)
    else if(op == 'x')
      temp = temp * parseFloat(this.state.current_input)
    else if(op == '÷')
      temp = temp / parseFloat(this.state.current_input)
    else {
      console.log('Fuck keyInOperator')
    }
    this.setState({ memory: temp });
    this.setState({ display_value: temp });
    this.setState({ last_is_equal: 1 });
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.display_value}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={this.keyInOperator}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.keyInNumber}>7</CalcButton>
            <CalcButton className="calc-number" onClick={this.keyInNumber}>8</CalcButton>
            <CalcButton className="calc-number" onClick={this.keyInNumber}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={this.keyInOperator}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.keyInNumber}>4</CalcButton>
            <CalcButton className="calc-number" onClick={this.keyInNumber}>5</CalcButton>
            <CalcButton className="calc-number" onClick={this.keyInNumber}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={this.keyInOperator}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={this.keyInNumber}>1</CalcButton>
            <CalcButton className="calc-number" onClick={this.keyInNumber}>2</CalcButton>
            <CalcButton className="calc-number" onClick={this.keyInNumber}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={this.keyInOperator}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={this.keyInNumber}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={this.keyInEqual}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
