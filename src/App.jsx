import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './views/Home';
import GenerateCode from './views/GenerateCode';
import LinkListProvider from './providers/LinkListProvider';
import { ThemeContext } from './contexts';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const context = useContext(ThemeContext);

  return (
    <LinkListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateCode />} />
        </Routes>
        <ToastContainer
          autoClose={5000}
          limit={5}
          position="bottom-right"
          pauseOnHover
          theme={context.darkMode ? 'colored' : 'light'}
        />
      </BrowserRouter>
    </LinkListProvider>
  );
}

export default App;
