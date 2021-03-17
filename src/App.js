import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Dashboard from './components/Dashboard/Dashboard';
import Spa from './components/spa/Spa';
import Facial from './components/facial/Facial';
import FormPage from './components/formpage/FormPage';
// import Subscriber from './components/subscriber/subscriber';


export default function App() {
    return (
        <Router className="background">
            <NavigationBar/>
            <Dashboard/>
            <Spa/>
            <Facial/>
            <FormPage/>
            {/* <Subscriber/> */}

        </Router>
    )
}
