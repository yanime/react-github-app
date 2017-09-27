import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import MenuComponent from './components/menu'

import {Container, Header} from 'semantic-ui-react'

const style = {
    h1: {
        padding: '2rem 0'
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
                <Route exact path="/" render={() => (
                    <Redirect to="/home"/>
                )}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/about-us" component={About}/>
            </main>
        </Container>
    </div>
);

export default ResponsiveLayout