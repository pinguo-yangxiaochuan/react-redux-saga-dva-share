// 更新 store  
import { CHANGE_TITLE } from './constants';

const changeTitle = (state = 'this is init title', action) => {
  switch(action.type) {
    case CHANGE_TITLE:
      console.log('reduce 更新store');
      return action.text;
    default:
    return state;
  }
}

export default (state = {}, action) => {
  return {
    title: changeTitle(state.title, action)
  }
};