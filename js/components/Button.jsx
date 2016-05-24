import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import Tooltip from 'material-ui/lib/tooltip';

/**
 * Button with built-in tooltip.
 */
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false,
      left: 0
    };
  }
  showTooltip(evt) {
    if (this.props.tooltip && !this.props.disabled) {
      var left = ReactDOM.findDOMNode(evt.target).getBoundingClientRect().left;
      this.setState({left: left, showTooltip: true});
    }
  }
  hideTooltip() {
    if (this.props.tooltip && !this.props.disabled) {
      this.setState({showTooltip: false});
    }
  }
  render() {
    return (
      <span>
        <RaisedButton {...this.props} onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}/>
        <Tooltip verticalPosition='bottom' style={Object.assign({left: this.state.left, boxSizing: 'border-box'}, this.props.tooltipStyle)} show={this.state.showTooltip} label={this.props.tooltip || ''} />
      </span>
    );
  }
}

Button.propTypes = {
  /**
   * Should this button be disabled?
   */
  disabled: React.PropTypes.bool,
  /**
   * The tooltip to show for this button.
   */
  tooltip: React.PropTypes.string,
  /**
   * Style for tooltip element.
   */
  tooltipStyle: React.PropTypes.object
};

export default Button;
