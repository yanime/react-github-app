import React from 'react';
import store from '../../store'
import Search from '../search';
import Loader from '../loader';
import UserList from '../list';
import {Container} from 'semantic-ui-react';
import {fetchUsers} from "../../actions/index";
import {connect} from 'react-redux'
import ReactPaginate from 'react-paginate';

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
        this.state = {
            userName: '',
            userList: [],
            total_count: 0,
            activePage: 0,
            isFetching: false,
            showInfoMessage: true
        };
        this.onSearch = this.onSearch.bind(this);
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    onSearch(string) {
        this.setState({
            showInfoMessage: false,
            userName: string
        });
        if(string.length){
            store.dispatch(fetchUsers(string, this.state.activePage))
        }
    }

    handlePageClick(data) {
        let selected = data.selected;
        this.setState({
            activePage: selected
        });
        store.dispatch(fetchUsers(this.state.userName, this.state.activePage))
    }

    renderResult() {
        if(this.state.showInfoMessage){
            return <span>Search github user by enter the name</span>
        } else if (this.props.usersByUsername.isFetching) {
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
                    <ReactPaginate previousLabel={"previous"}
                                   nextLabel={"next"}
                                   breakLabel={<a href="">...</a>}
                                   breakClassName={"break-me"}
                                   pageCount={this.props.usersByUsername.total_count}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   activeClassName={"active"} />
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