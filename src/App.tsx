import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Color from './components/Color';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route element={ <Layout />}>
          <Route
            path="/"
            element={ <Navigate to="/color/dc/e1/e9" /> }
            errorElement={ <NotFound /> }
          />
          <Route
            path="/color/:a/:b/:c"
            element={ <Color /> }
          />
        </Route>
      </Routes>
    </div>
  );
}
