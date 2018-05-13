var Counter = React.createClass({
	
	getInitialState: function(){
		return {
		
			counter: 0
		};
		
	},
	
	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},
	
	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},
	
	getDefaultProps: function(){
		console.log('Ustawienie domyślnych propsów.');
	},
	
	componentWillMount: function() {
		console.log('Możemy wykonać różne operacje, kalkulacje oparte na stanie i propsach, ' + 'w stanie przed renderowaniem');
	},
	
	componentDidMount: function() {
		console.log('Możemy sobie już wyonywać wszelakie operacje ponieważ DOM jest załadowany :)');
	},
	
	componentWillReceiveProps: function(){
		console.log('Kiedy pojawią się nowe propsy możemy wykonać np. operacje dotyczące state mając dostęp do wartości nowych jak i starych propsów');
	},
	
	shouldComponentUpdate: function(){
		console.log('Lorem ipsum xD xD');
		return true;
	},
	
	componentWillUpdate: function(){
		console.log('Podobnie jak componentWIllMount, operacje na DOM...');
	},
	
	componentWillUnmount: function(){
		console.log('W tym momencie można anulować np. EventListenery...');
	},
	
	
	render: function(){
		return (
			React.createElement('div', {className: 'counter'},
				React.createElement('h2', {}, 'Counter'),
				React.createElement('span', {}, 'Count: ' + this.state.counter),
				React.createElement('div', {}, 
					React.createElement('button', {
						className: 'increment', 
						onClick: this.increment},'Increment'),
							
					React.createElement('button', {
							onClick: this.decrement}, 'Decrement')
				)
			)
		);
	}
});

var element = React.createElement('div', {className: 'counters'},
		React.createElement('h1', {}, 'Counters:'),
		React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
);

ReactDOM.render(element, document.getElementById('app'));