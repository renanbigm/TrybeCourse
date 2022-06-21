import React from 'react';

const param = ['natação', 'corrida', 'basquete', 'jiujitsu'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
      <ol>
        {param.map((el) => Task(el))} 
      </ol>
      </div>
    );
  }
}
                
export default App;
