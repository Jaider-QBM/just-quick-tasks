import './styles/App.css'
import React  from 'react';
import { AppUI } from './components/AppUI';
import { ItemProvider } from './utils/ItemContext';

function App() {
  return (
    <ItemProvider>
      <AppUI/>
    </ItemProvider>
  );
}

export default App;
