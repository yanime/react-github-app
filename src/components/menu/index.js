import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class AppMenu extends Component {
    state = {activeItem: this.props.activeItem};

    handleItemClick = (e, {name}) => {
        this.setState({activeItem: name});
        this.props.changePage(name);
    };

    render() {
        const {activeItem} = this.state

        return (
            <Menu>
                <Menu.Item
                    name='/home'
                    active={activeItem === '/home'}
                    onClick={this.handleItemClick}
                >
                    Home
                </Menu.Item>

                <Menu.Item
                    name='/about-us'
                    active={activeItem === '/about-us'}
                    onClick={this.handleItemClick}
                >
                    About
                </Menu.Item>
            </Menu>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: (route) => push(route)
}, dispatch);

function mapStateToProps(state) {
    return {
        activeItem: state.routing.location.pathname
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppMenu)