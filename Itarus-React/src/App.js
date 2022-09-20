import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Home from './containers/Home'
import './i18n'
import ReactGa from 'react-ga'

function App() {

  useEffect(() =>{
    ReactGa.initialize('UA-160178098-1')

    ReactGa.pageview('/')
  }, [])

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
