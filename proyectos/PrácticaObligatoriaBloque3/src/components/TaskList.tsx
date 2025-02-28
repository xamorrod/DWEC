import React from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskPriority, TaskStatus } from '../context/TaskContext';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Loader2 } from 'lucide-react';
import EditTaskForm from './EditTaskForm';

const TaskList = () => {
    const { tasks, loading, error, deleteTask, toggleTaskStatus } = useTasks();
    const { user } = useAuth();
    const [editingTaskId, setEditingTaskId] = React.useState<string | null>(null);

    const getPriorityColor = (priority: TaskPriority) => {
        switch (priority) {
            case 'alta':
                return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
            case 'media':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
            default:
                return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
        }
    };

    if (error) {
        return (
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                {error}
            </div>
        );
    }

    if (loading && tasks.length === 0) {
        return (
            <div className="flex justify-center items-center h-32">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {tasks.length === 0 ? (
                <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                    No hay tareas registradas
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tasks.map((task) => (
                        <Card key={task.id} className="dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-primary">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start gap-4">
                                    <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-200 break-words">
                                        {task.name}
                                    </CardTitle>
                                    <Badge 
                                        className={`${getPriorityColor(task.priority)} text-sm font-medium px-3 py-1`}
                                        role="status"
                                        aria-label={`Prioridad: ${task.priority}`}
                                    >
                                        {task.priority}
                                    </Badge>
                                </div>
                            </CardHeader>
                        
                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap justify-between items-center gap-2">
                                    <span className="text-sm text-gray-600 dark:text-gray-400" role="time">
                                        {new Date(task.date).toLocaleDateString()}
                                    </span>
                                    <Badge
                                        variant={task.status === 'completada' ? 'default' : 'outline'}
                                        className="cursor-pointer transition-colors duration-200 hover:bg-opacity-90"
                                        onClick={() => user && toggleTaskStatus(user.uid, task.id)}
                                        role="switch"
                                        aria-checked={task.status === 'completada'}
                                        tabIndex={0}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                user && toggleTaskStatus(user.uid, task.id);
                                            }
                                        }}
                                    >
                                        {task.status}
                                    </Badge>
                                </div>
                        
                                <div className="flex flex-wrap justify-between gap-3">
                                    <Button
                                        variant="outline"
                                        className="flex-1 min-w-[120px] dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                        onClick={() => setEditingTaskId(task.id)}
                                        aria-label="Editar tarea"
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        className="flex-1 min-w-[120px] focus:ring-2 focus:ring-destructive focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                        onClick={() => user && deleteTask(user.uid, task.id)}
                                        aria-label="Eliminar tarea"
                                    >
                                        Eliminar
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            {editingTaskId && (
                <EditTaskForm
                    task={tasks.find(t => t.id === editingTaskId)!}
                    onClose={() => setEditingTaskId(null)}
                />
            )}
        </div>
    );
};

export default TaskList;