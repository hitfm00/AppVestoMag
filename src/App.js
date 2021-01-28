import Routers from './pages/Routers/Routers';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routers />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
