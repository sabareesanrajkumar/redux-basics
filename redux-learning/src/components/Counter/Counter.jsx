import { Component } from 'react';

import { connect } from 'react-redux';

import { counterActions } from '../store';
//implementing the same with class based components
class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {
    this.props.toggleCounter();
  }

  render() {
    return (
      <div>
        <h1>Redux cunter</h1>
        <h1>{this.props.counter}</h1>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>increment</button>
          <button onClick={this.decrementHandler.bind(this)}>decrement</button>
        </div>
        {/* <div>
                <button onClick={this.incrementByFiveHandler}>increment by 5</button>
                <button onClick={this.decrementByFiveHandler}>decrement by 5</button>
              </div> */}
        <button onClick={this.toggleCounterHandler.bind(this)}>
          Toggle counter
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    showCounter: state.counter.showCounter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    toggleCounter: () => dispatch(counterActions.toggleCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
