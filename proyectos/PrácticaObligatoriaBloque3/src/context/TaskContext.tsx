import React, { createContext, useState, useContext, useCallback } from 'react';
import {
    getTasksforUser,
    createTaskForUser,
    updateTaskForUser,
    deleteTaskForUser
} from '../services/firebaseService';

export type TaskPriority = 'alta' | 'media' | 'baja';
export type TaskStatus = 'pendiente' | 'completada';

export type Task = {
    id: string;
    name: string;
    priority: TaskPriority;
    date: string;
    status: TaskStatus;
    createdAt: string;
};

export type TaskWithoutId = Omit<Task, 'id'>;
export type TaskUpdate = Partial<Omit<Task, 'id'>>;

// Tipo para representar los datos que vienen de Firebase
type FirebaseTask = {
    name: string;
    priority: TaskPriority;
    date: string;
    status?: TaskStatus;
    createdAt?: string;
    [key: string]: any; // Para cualquier otro campo que pueda venir de Firebase
};

type TaskContextType = {
    tasks: Task[];
    updateTask: (userId: string, taskId: string, taskData: TaskUpdate) => Promise<void>;
    getTasks: (userId: string) => Promise<void>;
    addTask: (userId: string, taskData: Omit<Task, 'id' | 'createdAt' | 'status'>) => Promise<void>;
    deleteTask: (userId: string, taskId: string) => Promise<void>;
    toggleTaskStatus: (userId: string, taskId: string) => Promise<void>;
    loading: boolean;
    error: string | null;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTasks debe usarse dentro de un TaskProvider');
    }
    return context;
};

type TaskProviderProps = {
    children: React.ReactNode;
};

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleError = (error: unknown) => {
        const message = error instanceof Error ? error.message : 'Error desconocido';
        setError(message);
        setTimeout(() => setError(null), 5000);
        throw error;
    };

    const getTasks = useCallback(async (userId: string) => {
        setLoading(true);
        try {
            const data = await getTasksforUser(userId);
            if (!data) {
                setTasks([]);
                return;
            }

            const tasksArray = Object.entries(data).map(([id, taskData]) => {
                // Asegúrate de que taskData se trate como FirebaseTask
                const task = taskData as FirebaseTask;
                return {
                    id,
                    name: task.name,
                    priority: task.priority,
                    date: task.date,
                    status: task.status || 'pendiente',
                    createdAt: task.createdAt || new Date().toISOString()
                } as Task;
            });

            setTasks(tasksArray.sort((a, b) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            ));
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addTask = async (userId: string, taskData: Omit<Task, 'id' | 'createdAt' | 'status'>) => {
        setLoading(true);
        try {
            const newTask = {
                ...taskData,
                status: 'pendiente' as TaskStatus,
                createdAt: new Date().toISOString(),
            };
            await createTaskForUser(userId, newTask);
            await getTasks(userId);
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const updateTask = async (userId: string, taskId: string, taskData: TaskUpdate) => {
        setLoading(true);
        try {
            await updateTaskForUser(userId, taskId, taskData);
            setTasks(prev => prev.map(task =>
                task.id === taskId ? { ...task, ...taskData } : task
            ));
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const deleteTask = async (userId: string, taskId: string) => {
        setLoading(true);
        try {
            await deleteTaskForUser(userId, taskId);
            setTasks(prev => prev.filter(task => task.id !== taskId));
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    const toggleTaskStatus = async (userId: string, taskId: string) => {
        setLoading(true);
        try {
            const task = tasks.find(t => t.id === taskId);
            if (!task) return;

            const newStatus = task.status === 'pendiente' ? 'completada' : 'pendiente';
            await updateTaskForUser(userId, taskId, { status: newStatus });
            setTasks(prev => prev.map(t =>
                t.id === taskId ? { ...t, status: newStatus } : t
            ));
        } catch (error) {
            handleError(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                getTasks,
                addTask,
                updateTask,
                deleteTask,
                toggleTaskStatus,
                loading,
                error
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};