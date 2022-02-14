import AppRouter from './routes/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layouts/Admin';

const App = () => {
  return (
    <>
      <Router>
        <Layout>
          <AppRouter />
        </Layout>
      </Router>
    </>
  );
};

export default App;
