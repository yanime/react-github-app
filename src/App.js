import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import MenuComponent from './components/menu'

import { Container, Header } from 'semantic-ui-react'

const style = {
    h1: {
        marginTop: '3em',
    }
};

const ResponsiveLayout = () => (
    <div>
        <MenuComponent></MenuComponent>
        <Header
            as='h1'
            content='Github Users Search'
            style={style.h1}
            textAlign='center'
        />
        <Container>
            <main>
                <Route exact path="/home" component={Home} />
                <Route exact path="/about-us" component={About} />
            </main>
        </Container>
    </div>
);

export default ResponsiveLayout