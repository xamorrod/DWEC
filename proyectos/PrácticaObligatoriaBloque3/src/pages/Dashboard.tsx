import React, { useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import { useAuth } from '../context/AuthContext';
import CreateTaskForm from '../components/CreateTaskForm';
import TaskList from '../components/TaskList';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const { getTasks } = useTasks();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) {
      getTasks(user.uid);
    }
  }, [user, getTasks]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl min-h-screen">
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Gestor de Tareas
          </h1>
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4" />
            Cerrar Sesión
          </Button>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Bienvenido, {user?.email}
        </p>
      </header>

      <div className="space-y-8">
        <section aria-labelledby="nueva-tarea-title">
          <Card className="dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-shadow hover:shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle id="nueva-tarea-title" className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                Nueva Tarea
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CreateTaskForm />
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="mis-tareas-title">
          <Card className="dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-shadow hover:shadow-xl">
            <CardHeader>
              <CardTitle id="mis-tareas-title" className="text-xl font-bold text-gray-800 dark:text-gray-100">
                Mis Tareas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TaskList />
            </CardContent>
          </Card>
        </section>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Gestor de Tareas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;