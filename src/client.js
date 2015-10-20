import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function getTussit() {
    return axios.get('/api/tussi').then((response) => {
        return response.data;
    });
}

const tussit = getTussit();

tussit.then((data) => console.log(data));

const HelloWorld = React.createClass({
    render: function ()  {
        return (
            <div>
                Hello {this.props.name}
            </div>
       );
    }
});

const HelloWorldApp = React.createClass({
    getInitialState: function() {
        return {
           count: 0,
           name: 'Pekkis',
           names: []
        };
    },

    componentDidMount: function() {
        getTussit().then ((data) => {
            this.setState({
                names: data
        });
    });
    },

    render: function() {
        const names = this.state.names;

        return (
            <div>
                <h1>Lusso</h1>

                {names.map((name, i) =>
                    <HelloWorld key={i} name={name}/>
                )}

                <Counterizer
                    count={this.state.count}
                    onIncrementCounter={this.incrementCounter}/>

                <Counter count = {this.state.count}/>
            </div>
        );
    },

incrementCounter: function () {
    this.setState({
        count: this.state.count + 1
     });
    }
});

const Counterizer = React.createClass({
    render: function() {
        return (
            <div className="tussi">
                {this.props.count}

                <button onClick={this.props.onIncrementCounter}>MOAR!</button>
            </div>
        );
    }
});

class Counter extends React.Component {
    render() {
        return (
            <div className="mega_counter">
                {this.props.count}
            </div>
        );
    }
};

ReactDOM.render (
    <HelloWorldApp/>,
    document.getElementById('app')
);
