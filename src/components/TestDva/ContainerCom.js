import React, { Component } from 'react';
import { connect } from 'dva';
import UICom from './UICom';

class ContainerCom extends Component {
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
    title: state.model.title
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTitle(text) {
      dispatch({
        type: 'model/changeTitle',
        payload: {
          text: 'Dva 同步action'
        }
      });
    },

    asyncChangeTitle(text) {
      dispatch({
        type: 'model/asyncChangeTitle',
        payload: {
          text: 'Dva 异步action'
        }
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCom);