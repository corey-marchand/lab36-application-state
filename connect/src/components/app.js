import React from 'react';
import { actions } from '../store/actions';


class App extends React.Component {
  render() {
    return (
      <>
        <div>{this.props.foo}</div>
        <button onClick={() => this.props.handleChange()}></button>
      </>
    );
  }
}

export default App;
