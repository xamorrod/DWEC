import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const TaskApp = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <TaskProvider>
          <TaskApp />
        </TaskProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;