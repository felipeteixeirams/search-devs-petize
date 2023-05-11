import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './routes/NotFound';

const Home = lazy(() => import('./routes/Home'))
const Perfil = lazy(() => import('./routes/Perfil'))


function App (){
  
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route 
            path="" 
            element={<Home />}>
            <Route 
              path="perfil/:id" 
              element={<Perfil />} />
          </Route>
          <Route 
            path="*" 
            element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;