import Routers from './pages/Routers/Routers';
import './App.sass';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Container>
            <Routers />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
