import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import GenerateCode from './views/GenerateCode';
import LinkListProvider from './providers/LinkListProvider';

function App() {
  return (
    <LinkListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateCode />} />
        </Routes>
      </BrowserRouter>
    </LinkListProvider>
  );
}

export default App;
