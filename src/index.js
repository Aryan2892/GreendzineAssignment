// import React from 'react';
// import ReactDOM from 'react-dom';
// import AppRouter from './pages/AppRouter';

// // Render the AppRouter component
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AppRouter />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from './pages/AppRouter';



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);



