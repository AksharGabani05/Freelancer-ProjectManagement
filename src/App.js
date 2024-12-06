import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Payments from './pages/Payments';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function AppContent() {
  const { user } = useAuth();
  const isAuthPage = window.location.pathname === '/login' || window.location.pathname === '/register';

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        
        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {user && !isAuthPage && <Header />}
            <Routes>
            
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
              <Route path="/payments" element={<PrivateRoute><Payments /></PrivateRoute>} />
              <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;