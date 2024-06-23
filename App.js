import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Cards from './Cards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4 text-center">
        <h1>CS 230L</h1>
        <h2>Section - 702</h2>
        <p>WVU ID: 800296310</p>
        <p>Hi, I am Alex Stavrulakis</p>
      </div>
      <div className="container mt-4">
        <Cards />
      </div>
    </div>
  );
}

export default App;
