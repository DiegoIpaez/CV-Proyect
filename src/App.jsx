import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MyProyects from './pages/MyProyects';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/myproyects' component={MyProyects} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
