import React, { Component } from 'react';
import './style.css';

class Hello extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: '',
      list: [
        'react',
        'redux',
        'saga',
        'dva'
      ],
      localVal: '点击可以更新这个局部变量'
    }

    this.onLiClick = this.onLiClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onLiClick() {
    this.setState({
      localVal: 'setState 更新这个局部变量'
    });
    alert(this.state.localVal);
  }

  onInputChange() {
    this.setState({
      inputVal: '我是受控了'
    })
  }

  componentDidMount() {
    console.log('componentDidMount 调用');
  }

  render() {
    return (
      <div>
        <h1 className='title'>react知识点 demo</h1>
        <ul>
          <li>{this.props.parentToChildVal}</li>
          <li onClick={this.onLiClick}>{this.state.localVal}</li>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
        <form>
          <input value={this.state.inputVal} onChange={this.onInputChange}/>
          <br/>
          <input defaultValue="我非受控"/>
        </form>
      </div>
    );
  }
}

export default Hello;