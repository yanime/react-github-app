import React from 'react';
import store from '../../store'
import Search  from '../search';
import Loader from '../loader';
import UserList from '../list';
import { Container } from 'semantic-ui-react';
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
        this.state = { userList: [], isFetching: false };
    }

    //todo check if correct
    componentWillReceiveProps(nextProps) {
        if (nextProps.isFetching !== this.props.isFetching) {
            this.setState({isFetching: nextProps.isFetching});
        }
        if (nextProps.userList !== this.props.userList) {
            this.setState({userList: nextProps.userList});
        }
    }

    onSearch(username){
        store.dispatch(fetchUsers(username))
    }

    renderResult(){
        if(this.state.isFetching){
            return <Loader></Loader>
        }
        return <UserList userList={this.state.userList}></UserList>
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

function mapStateToProps(state) {
    return {
        isFetching: state.usersByUsername.isFetching,
        userList: state.usersByUsername.items
    }
}

export default connect(
    mapStateToProps,
    null
)(Home)