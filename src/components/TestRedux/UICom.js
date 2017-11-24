import React, { Component } from 'react';

class UICom extends Component {
  constructor(props) {
    super(props);
    this.onH2Click = this.onH2Click.bind(this);
  }
  onH2Click() {
    console.log('子组件点击触发');
    this.props.onClick('我是UICOM组件点击触发的，dispatch -> reducer -> store -> title -> UICom');
  }
  componentWillReceiveProps(nextProps) {
    console.log('子组件更新')
  }
  render() {
    return (
      <h2 onClick={this.onH2Click}>{this.props.title}</h2>
    )
  }
}

export default UICom;