import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Sidebar from './components/common/Sidebar';
import Navbar from './components/common/Navbar';

import PresidentDashboard from './pages/dashboard/PresidentDashboard';
import VicePresidentDashboard from './pages/dashboard/ViceResidentDashboard';
import ResidentDashboard from './pages/dashboard/ResidentDashboard';
import Analytics from './pages/president/analytics';
import Announcements from './pages/president/announcements';
import NewTicket from './pages/resident/newTicket';
import MyTickets from './pages/resident/myTicket';
import RoleRedirect from './components/RoleRedirect';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';


function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NotificationProvider>
          <Router>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
              <Sidebar />
              <div className="lg:pl-64">
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/" element={<RoleRedirect />} />
                    <Route path="/president" element={<PresidentDashboard />} />
                    <Route path="/president/analytics" element={<Analytics />} />
                    <Route path="/president/announcements" element={<Announcements />} />
                    <Route path="/vice-president" element={<VicePresidentDashboard />} />
                    <Route path="/resident" element={<ResidentDashboard />} />
                    <Route path="/resident/new-ticket" element={<NewTicket />} />
                    <Route path="/resident/my-tickets" element={<MyTickets />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </main>
              </div>
            </div>
          </Router>
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
