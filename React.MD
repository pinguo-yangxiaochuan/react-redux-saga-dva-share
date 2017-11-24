# React

### [React 中文网站](https://doc.react-china.org/)

### 为什么选择 ta
* 声明式
* 组件化 
* 支持服务端渲染
* React Native
* 完善的生态
```
 通过这次维护 车货匹配后台管理系统 的经验总结：
 1、模块化 
 2、UI组件化
 3、单项数据流

 可以极大的降低维护成本，使项目可控
```

### 前置知识
* [es6](http://es6.ruanyifeng.com/)
* [babel](https://babeljs.cn/)
* [webpack](https://doc.webpack-china.org/)

### JSX
* 一种 JavaScript 的语法扩展，在 React 中使用 JSX 来描述用户界面【最基本也最重要】
```javascript
// 1、在 JSX 中使用表达式，注意是表达式
const value = 'world';
<h1>Hello, { value }!</h1>

// 2、if 或者 for 语句里使用 JSX
if (user) {
  return <h1>Hello, {formatName(user)}!</h1>;
}
return <h1>Hello, Stranger.</h1>;

// 3、JSX 属性 【小驼峰写法】
// 注意比较特殊的属性写法：class -> className，for -> htmlFor
const element = <div tabIndex="0"></div>;
const element = <img src={user.avatarUrl}></img>;

// 4、JSX 嵌套
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### 元素渲染
* 将元素渲染到 DOM 中【提供React App 挂载】
```javascript
// 提供根组件，将元素渲染到根组件里

// index.html
<div id="root"></div>

// app.js
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

### 组件定义
* 组件名称必须以大写字母开头
```javascript
// 函数定义
const Hello = props =>  <h1>Hello, {props.name}</h1>;
// 类定义
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### Props
* 父子组件传值
* 只读

### State
* 局部状态，在构造函数里初始化
* 实现组件自我更新
* setState
```javascript
// Wrong
this.state.comment = 'Hello';
// Correct
this.setState({comment: 'Hello'});

// 异步更新，可以传入第二参数作为回调
this.setState({count: 10});
console.log(count) // 不会得到最新的count 10
```

### 生命周期
* 提供对组件细粒度控制，比如组件挂载时可以进行某种操作，组件卸载时可以执行清除操作
```
componentWillMount
componentDidMount 【常用，组件挂载成功】

componentWillReceiveProps【常用，props更新】
shouldComponentUpdate【常用，优化手段之一】
componentWillUpdate
componentDidUpdate

componentWillUnmount【常用，清理内存】
```

### 事件处理
* React实现W3C标准的事件系统
* 没有兼容问题，内存占用低
* 建议在构造函数中绑定this
```javascript
class Hello extends React.Component {
  constructor(props) {
    super(props);
    // TODO 若不绑定 this，click触发时，this指向错误
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('hello');
  }

  render() {
    return (
      <h1 onClick={this.handleClick}></h1>
    );
  }
}
```

###  列表 & keys 【很重要】
* map遍历
* 兄弟组件唯一key，优化手段之一
```javascript
data.map((item, index) => {
  return (
    <li key={index}>{item}</li>
  )
})
```

### 表单【重要，还有点清奇】
* 受控组件
```
表单域的属性value值受控于props 或 state
```
* 非受控组件
```
表单域的属性value值来自于用户输入
为了给表单域默认值，需要使用defaultValue属性，不能使用value属性
```

### 组合
* children
```javascript
const Child = ({ children }) => <h1>{ children }</h1>
const Parent = () => <Child><span>hello</span></Child>
```

