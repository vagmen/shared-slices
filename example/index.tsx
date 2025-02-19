import React from 'react';
import { createRoot } from 'react-dom/client';
import { Thing } from '../src';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
