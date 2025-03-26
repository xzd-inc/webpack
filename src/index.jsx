import { createRoot } from 'react-dom/client';
import React from 'react';

function App() {
  return <h1>Hello, world</h1>;
}

// 渲染你的 React 组件
const root = createRoot(document.getElementById('app'));
root.render(App());
