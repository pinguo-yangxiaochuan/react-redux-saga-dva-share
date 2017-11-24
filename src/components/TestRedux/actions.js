// 描述 更新 title
import { CHANGE_TITLE, ASYNC_CHANGE_TITLE } from './constants';

// 同步 action
export const changeAction = (text) => ({
  type: CHANGE_TITLE,
  text
})

// 异步 action
export const asyncChangeAction = (text) => ({
  type: ASYNC_CHANGE_TITLE,
  text
})