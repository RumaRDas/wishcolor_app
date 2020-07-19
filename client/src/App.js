import React from 'react';
import Container from './pages/Container';
import Routes from './Routes';
import './styles/App.css';

function App() {
  return (
    <div>
      <Container>
        <h1>Color App</h1>
        <div className="content">
          <Routes />
        </div>

      </Container>
    </div>

  );
}

export default App;
