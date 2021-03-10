import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard/Dashboard';
import Spa from './components/spa/Spa';
import Facial from './components/facial/Facial';
import FormPage from './components/formpage/FormPage';


export default function App() {
    return (
        <Router>
            <NavigationBar/>
            <Dashboard/>
            <Spa/>
            <Facial/>
            <FormPage/>

        </Router>
    )
}
