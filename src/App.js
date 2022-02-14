import AppRouter from './routes/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/style.css'

const App = () => {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
};

export default App;
