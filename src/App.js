import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddTopic from './components/AddTopic/AddTopic';
import WriteBlog from './components/WriteBlog/WriteBlog';
import './styles/main.scss';

function App() {
  return (
    <div className="page-container">
      <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/add-topic" element={<AddTopic />} />
          <Route path="/write-blog" element={ <WriteBlog/> } />
      </Routes>
    </div>
  );
}

export default App;
