import { useEffect } from 'react';
import { TaskProvider, useTasks } from './context/TaskContext';
import CreateTaskForm from './components/CreateTaskForm';
import TaskList from './components/TaskList';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { ThemeProvider } from './context/ThemeContent';

const TaskApp = () => {
  const { getTasks } = useTasks();

  useEffect(() => {

    // Cuando se inicia la aplicación se cargan las tareas existentes del usuario
    // Usamos un ID fijo para este ejemplo, en producción se usaría un ID de usuario real
    getTasks('currentUserId');
  }, [getTasks]);

  return (
    <main className="container mx-auto p-4 max-w-6xl min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="mb-8">
            <h1 className="sr-only">Gestor de Tareas</h1>
        </header>
    
        <div className="space-y-8">
            <section aria-labelledby="nueva-tarea-title">
                <Card className="mb-8 dark:bg-gray-800 dark:border-gray-700 shadow-lg transition-shadow hover:shadow-xl">
                    <CardHeader className="pb-4">
                        <div className="flex justify-between items-center">
                            <CardTitle id="nueva-tarea-title" className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                                Gestor de Tareas
                            </CardTitle>
                        </div>
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
    </main>
  );
};

// Envolviendo con providers
function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <TaskApp />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;