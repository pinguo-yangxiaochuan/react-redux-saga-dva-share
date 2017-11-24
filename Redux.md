# Redux

### [Redux 中文网站](http://www.redux.org.cn/)

### 为什么选择 ta
* 约束与规范
* 可预测
* 易于测试
* 日志打印
* 时间旅行
```
对 React 是一种很好的实践
极大提升维护效率
```

### Action
* 把数据从应用传到 store 的有效载荷
* store 数据的唯一来源
* 仅仅是描述要更新 store 这个事实
```javascript
{
  type: ADD_TODO,
  text: 'add todo'
}
```

### Reducer
* 如何更新 store
* 纯函数
* 拆分
```javascript
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
}
```

### Store
* 维持整个应用的 state
* 只有一个
```javascript
// 根据 reducer 生成 store
import { createStore } from 'redux';
import todoApp from './reducers';
let store = createStore(todoApp);
```

### React 实践
* [数据流向](http://i.imgur.com/AjdPEQm.png)
* [更详细数据流向](http://i.imgur.com/5N0i0mE.png)
* [异步数据流向](http://upload-images.jianshu.io/upload_images/1632709-6d14bdaa2fc8b34b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
* react-redux
* Container Components
* Presentational Components
