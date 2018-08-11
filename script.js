var Counter = React.createClass({
	getDefaultProps: function() {
			console.log("Setting default props");
	},

    getInitialState: function() {
        return {
            counter: 0
        };
    },

	componentWillMount: function() {
			console.log("Mounting component");
	},

	componentDidMount: function() {
			console.log("Component mounted");
	},

	componentWillReceiveProps: function(nextProps) {
			console.log("Received props");
	},

	shouldComponentUpdate(nextProps, nextState) {
			console.log("Component should be update");
			return true;
	},

	componentWillUpdate: function(nextProps, nextState) {
			console.log("Component should be update");
	},

	componentWillUpdate: function(nextProps, nextState) {
			console.log("DOM modified");
	},

	componentWillUnmount: function() {
			console.log("Component unmounted");
	},

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

	decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
        	React.createElement('h2', {}, this.state.counter),
        	React.createElement('ul', {},	
 	         	React.createElement('button', {onClick: this.decrement}, 'Zmniejsz'),
    	        React.createElement('button', {onClick: this.increment}, 'Zwiększ')
        	)
        );
    }
});

var manyCounters = React.createClass({
	render: function() {
		return React.createElement('div', {}, 
			React.createElement(Counter, {}, ),
			React.createElement(Counter, {}, )
		);
	}
});

var element = React.createElement(manyCounters)

ReactDOM.render(element, document.getElementById('app'));