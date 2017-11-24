// Dva 项目入口
import React from 'react';
import dva from 'dva';
import model from './model';
import route from './route';

export default () => {
  const app = dva();
  app.model(model);
  app.router(route);
  app.start('#root');
}


