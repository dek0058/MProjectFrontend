import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="centered-form">
          <div className="centered-form__box">
            <header className="App">
              <h1>Login</h1>
            </header>
            <form action="/api">
              <p>
                ID:
                <input type="text" name="username" placeholder="Display name" required
                      onChange={(event) => this.setState({enteredValue: event.target.value})}>
              </input>
              </p>
              <p>
                Password:
                <input type="text" name="password" placeholder="Passward" required
                      onChange={(event) => this.setState({enteredValue: event.target.value})}>
              </input>
              </p>
              <button>Join</button>
            </form>
          </div>
        </div>
      );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
