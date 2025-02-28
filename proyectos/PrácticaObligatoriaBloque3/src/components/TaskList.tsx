import React from 'react';
import { useTasks } from '../context/TaskContext';
import { TaskPriority} from '../context/TaskContext';
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
                return 'bg-destructive/20 text-destructive';
            case 'media':
                return 'bg-primary/20 text-primary';
            default:
                return 'bg-secondary/20 text-secondary-foreground';
        }
    };

    if (error) {
        return (
            <div className="p-4 mb-4 text-sm text-destructive rounded-lg bg-destructive/10" role="alert">
                {error}
            </div>
        );
    }

    if (loading && tasks.length === 0) {
        return (
            <div className="flex justify-center items-center h-32">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {tasks.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                    No hay tareas registradas
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tasks.map((task) => (
                        <Card key={task.id} className="border border-border hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-ring">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start gap-4">
                                    <CardTitle className="text-lg font-semibold break-words">
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
                                    <span className="text-sm text-muted-foreground" role="time">
                                        {new Date(task.date).toLocaleDateString()}
                                    </span>
                                    <Badge
                                        variant={task.status === 'completada' ? 'default' : 'outline'}
                                        className="cursor-pointer transition-colors duration-200 hover:bg-accent"
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
                                        className="flex-1 min-w-[120px]"
                                        onClick={() => setEditingTaskId(task.id)}
                                        aria-label="Editar tarea"
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        className="flex-1 min-w-[120px]"
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