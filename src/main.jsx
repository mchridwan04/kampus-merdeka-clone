import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Header from './components/header'
// import App from './App.jsx'
import './index.css'
import Program from './components/program'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Program />
    <Header />
    {/* <App /> */}
  </React.StrictMode>,
)
