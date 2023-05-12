import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';

const Home = lazy(() => import('./containers/Home/Home'))
const Perfil = lazy(() => import('./containers/Perfil/Perfil'))


function App (){
  
  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route 
            path="" 
            element={<Home />} />
          <Route 
              path="perfil/:id" 
              element={<Perfil />} />
          <Route 
            path="*" 
            element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;