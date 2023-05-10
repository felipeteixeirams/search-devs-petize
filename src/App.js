import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './routes/NotFound';

const Home = lazy(() => import('./routes/Home'))
const Perfil = lazy(() => import('./routes/Perfil'))


const App = () => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </Router>
)

export default App;