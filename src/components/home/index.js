import React from 'react'
import { Input } from 'semantic-ui-react';

const style = {
    container: {
        display: 'flex',
    },
    label: {
        'padding': '0.5rem 1rem',
        'fontSize': "1.25rem"
    }
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (event) {
        this.setState({value: event.target.value});
    };
    render() {
        return (
            <div style={style.container}>
                <label style={style.label}>Search User: </label>
                <Input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}

export default Home;