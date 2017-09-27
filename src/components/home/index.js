import React from 'react';
import store from '../../store'
import Search from '../search';
import Loader from '../loader';
import UserList from '../list';
import {Container} from 'semantic-ui-react';
import {fetchUsers} from "../../actions/index";
import {connect} from 'react-redux'

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        'padding': '0.5rem 1rem',
        'fontSize': "1.25rem"
    },
    resultContainer: {
        'padding': '1rem 0.5rem'
    }
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userList: [], isFetching: false};
    }

    onSearch(username) {
        store.dispatch(fetchUsers(username))
    }

    renderResult() {
        if (this.props.usersByUsername.isFetching) {
            return <Loader></Loader>
        }
        return <UserList userList={this.props.usersByUsername.items}></UserList>
    }

    render() {
        return (
            <Container>
                <div style={style.container}>
                    <Search onSearch={this.onSearch}></Search>
                    <div style={style.resultContainer}>
                        {this.renderResult()}
                    </div>
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    ...state
});

export default connect(
    mapStateToProps,
    null
)(Home)