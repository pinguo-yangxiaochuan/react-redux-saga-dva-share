// 容易组件 连接 redux 与 UI 组件
import React, { Component } from 'react';
import { connect } from 'react-redux';
import UICom from './UICom';
import { changeAction, asyncChangeAction } from './actions';

class ContainerCom extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('父组件更新')
  }

  render() {
    return (
      <div>
        <UICom 
          title={this.props.title} 
          onClick={this.props.changeTitle}
        ></UICom>

        <UICom 
          title={this.props.title} 
          onClick={this.props.asyncChangeTitle}
        ></UICom>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    title: state.title
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle(text) {
      console.log('父组件dispatch');
      dispatch(changeAction(text));
    },

    asyncChangeTitle(text) {
      console.log('父组件dispatch');
      dispatch(asyncChangeAction(text));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCom);