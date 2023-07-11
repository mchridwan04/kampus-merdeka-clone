import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Header from './components/header'
// import App from './App.jsx'
import './index.css'
import Program from './components/program'
import ProgramUnggulan from './components/program_unggulan'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Program />
    <Header />
    <ProgramUnggulan />
    {/* <App /> */}
  </React.StrictMode>,
)
