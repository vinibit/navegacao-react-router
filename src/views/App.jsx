import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = () => {
    return (
        <div className="App">
            <Menu />
            <Content />
        </div>
    )
}

export default App