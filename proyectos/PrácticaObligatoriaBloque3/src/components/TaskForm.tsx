import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface CreateTaskFormProps {
    userId: string;
    onCreate: (taskData: { name: string; priority: string; date: string }) => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onCreate }) => {
    const [newTask, setNewTask] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate({
            name: newTask,
            priority,
            date
        });
        setNewTask('');
        setPriority('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Nueva Tarea</h2>
            <div className="space-y-4">
                <Input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Nombre de la tarea"
                    required
                />
                <Input
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    placeholder="Prioridad (alta, media, baja)"
                    required
                />
                <Input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <Button type="submit" className="w-full">
                    Crear Tarea
                </Button>
            </div>
        </form>
    );
};

export default CreateTaskForm;