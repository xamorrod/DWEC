import React, { useState } from 'react';
import { Task, useTasks, TaskPriority } from '../context/TaskContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Loader2 } from 'lucide-react';

interface EditTaskFormProps {
    task: Task;
    onClose: () => void;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task, onClose }) => {
    const { updateTask, loading } = useTasks();
    const [formData, setFormData] = useState({
        name: task.name,
        priority: task.priority,
        date: task.date
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim()) return;

        try {
            await updateTask('currentUserId', task.id, formData);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                <h3 className="text-xl font-bold mb-4 dark:text-gray-100">Editar Tarea</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label className="block text-sm font-medium dark:text-gray-300">
                            Nombre
                        </Label>
                        <Input
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="dark:bg-gray-700 dark:border-gray-600"
                            disabled={loading}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label className="block text-sm font-medium dark:text-gray-300">
                            Prioridad
                        </Label>
                        <Select
                            value={formData.priority}
                            onValueChange={(value: TaskPriority) =>
                                setFormData({ ...formData, priority: value })
                            }
                            disabled={loading}
                        >
                            <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                                <SelectValue placeholder="Selecciona prioridad" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                                <SelectItem value="alta" className="dark:hover:bg-gray-600">Alta</SelectItem>
                                <SelectItem value="media" className="dark:hover:bg-gray-600">Media</SelectItem>
                                <SelectItem value="baja" className="dark:hover:bg-gray-600">Baja</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label className="block text-sm font-medium dark:text-gray-300">
                            Fecha
                        </Label>
                        <Input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="dark:bg-gray-700 dark:border-gray-600"
                            disabled={loading}
                        />
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onClose}
                            disabled={loading}
                            className="dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            disabled={loading || !formData.name.trim()}
                            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Guardando...
                                </>
                            ) : (
                                'Guardar'
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTaskForm;