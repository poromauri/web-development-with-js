import React from 'react';

const Greeter = React.createClass({
    render: function() {
        const { name } = this.props.params;

        return (
            <h2>
                Hailoo {name}
            </h2>
        );
    }
});

export default Greeter;
