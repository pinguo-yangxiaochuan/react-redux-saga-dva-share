import React, { Component } from 'react';

class UICom extends Component {
  constructor(props) {
    super(props);
    this.onH2Click = this.onH2Click.bind(this);
  }
  onH2Click() {
    this.props.onClick('我是UICOM组件点击触发的');
  }
  render() {
    return (
      <h2 onClick={this.onH2Click}>{this.props.title}</h2>
    )
  }
}

export default UICom;