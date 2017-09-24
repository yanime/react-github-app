import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Menu from './components/menu'

const App = () => (
    <div>
        <Menu></Menu>

        <main>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about-us" component={About} />
        </main>
    </div>
);

export default App;
