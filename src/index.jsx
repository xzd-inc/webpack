import { createRoot } from 'react-dom/client';
import React from 'react';
import 'uno.css'

function App() {
  return <h1 className="m-1 color-red">Hello, world</h1>;
}

// 渲染你的 React 组件
const root = createRoot(document.getElementById('app'));
root.render(App());
