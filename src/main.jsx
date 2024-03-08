import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import logo from '/github.jpg'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='header'>
      CV Application
    </div>
    <div className='container'>
      <App />
    </div>
    <div className='footer'>
      <div className='signature'>
        {`Copyright © Bengoro1 ${new Date().getFullYear()}`}
        <img
          src={logo}
          alt='Logo'
          className='git-logo'
          onClick={() => window.open('https://github.com/Bengoro1','_newtab')}
        />
      </div>
    </div>
  </React.StrictMode>,
)
