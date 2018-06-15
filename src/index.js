import ReactDOM from 'react-dom';
import React from 'react';
import './styles.css';

class Test extends React.Component {
  render() {
    return (
      <div>
        <p>Test</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById('root')
);
