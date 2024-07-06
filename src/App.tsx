import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Analytics from './components/Analytics';
import Transactions from './components/Transactions';
import HelpSupport from './components/HelpSupport';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <div className="flex">
        <Navigationbar />
        <main className="flex-grow p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/activity" element={<Table />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/help-support" element={<HelpSupport />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
