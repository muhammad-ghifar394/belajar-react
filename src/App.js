import React from 'react';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title="React Task Manager"
        description="Kelola daftar tugas Anda secara efisien"
      />
    </div>
  );
}

export default App;