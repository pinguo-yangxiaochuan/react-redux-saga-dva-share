// Dva model 是对 redux + saga 一层封装
// 极大的降低开发难度

export default {
  namespace: 'model',
  state: {
    title: 'Test Dva'
  },
  reducers: {
    changeTitle(state, { payload }) {
      return {
        ...state,
        title: payload.text
      }
    }
  },
  effects: {
    * asyncChangeTitle({ payload }, { put }) {
      yield new Promise((resolve) => setTimeout(()=> {resolve(1010)}, 2000));
      yield put({ type: 'changeTitle', payload: { text: `这是一个异步action ${ payload.text }` } });
    }
  }
};