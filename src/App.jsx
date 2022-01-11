import React from 'react';
// import Home from './views/Home';
import GenerateCode from './views/GenerateCode';
import LinkListProvider from './providers/LinkListProvider';

function App() {
  return (
    <LinkListProvider>
      <GenerateCode />
    </LinkListProvider>
  );
}

export default App;
