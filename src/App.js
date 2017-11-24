import React, { Component } from 'react';
import TestReact from './components/TestReact';
import TestRedux from './components/TestRedux';
import testDva from './components/TestDva';

const components = {
  '/': <TestReact parentToChildVal='这是我子孙节点'></TestReact>,
  '/redux': <TestRedux />,
}

// 为了 良好展示 react + redux + dva demo
// 这里 写了简陋的路由监听

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.getHash()
    }
  }

  getHash() {
    const hash = window.location.hash.slice(1) || '/';
    return hash === '/dva' ? testDva() : hash;
  }

  componentDidMount() {
    window.onhashchange = () => {
      this.getHash() && this.setState({
        url: this.getHash()
      })
    }
  }

  render() {
    return (
      <div className="App">
        { components[this.state.url] }
      </div>
    );
  }
}

export default App;
