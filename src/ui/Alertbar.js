var React = require('react/addons');
var classnames = require('classnames');
var Transition = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
	displayName: 'Alertbar',
	propTypes: {
		animated: React.PropTypes.bool,
		children: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		pulse: React.PropTypes.bool,
		type: React.PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
		visible: React.PropTypes.bool
	},

	getDefaultProps () {
		return {
			type: 'default'
		};
	},

	render () {
		var className = classnames('Alertbar', ('Alertbar--' + this.props.type), {
			'Alertbar--animated': this.props.animated,
			'Alertbar--pulse': this.props.pulse
		}, this.props.className);

		var pulseWrap = this.props.pulse ? <div className="Alertbar__inner">{this.props.children}</div> : this.props.children;
		var animatedBar = this.props.visible ? <div className={className}>{pulseWrap}</div> : null;

		var component = this.props.animated ? (
			<Transition transitionName="Alertbar" component="div">
				{animatedBar}
			</Transition>
		) : <div className={className}>{pulseWrap}</div>;

		return component;
	}
});
