const React = require("react");
const PropTypes = require("prop-types");

class Greeter extends React.Component {

	static propTypes = {
		calc: PropTypes.object
	};

	constructor(props, context) {
		super(props, context);
		this.update = this.update.bind(this);
		this.state = {name: ""};
	}

	getGreeting() {
		return this.state.name.length > 0 ? `Hello, ${this.state.name}! Your number is ${this.props.calc.hash(this.state.name)}.` : "";
	}

	update(event) {
		this.setState({name: event.target.value});
	}

	render() {
		return (
			<div id="app" className="container">
				<h2 className="text-center">Your fist React+Bootstrap app</h2>
				<div className="row">
					<div className="col-4 text-right pt-4">
						<p>Your name:</p>
					</div>
					<div className="col align-middle">
						<input className="form-control mt-4" placeholder="Enter your name ..." type="text" id="username" onKeyUp={this.update}/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-3">
						&nbsp;
					</div>
					<div className="col">
						<p className="my-style mt-2">{this.getGreeting()}</p>
					</div>
				</div>
			</div>
		);
	}
}

module.exports = Greeter;