import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Loader2 } from 'lucide-react';

const CreateTaskForm = () => {
    const { addTask, loading } = useTasks();
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        priority: 'media' as 'alta' | 'media' | 'baja',
        date: new Date().toISOString().split('T')[0],
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name.trim() || !user) return;

        try {
            await addTask(user.id, formData);
            setFormData({
                name: '',
                priority: 'media',
                date: new Date().toISOString().split('T')[0],
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-4 shadow-md transition-shadow hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100" id="newTaskFormTitle">Nueva Tarea</h2>
            <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="newTaskFormTitle">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 text-base">
                        Nombre de la tarea <span className="text-red-500" aria-hidden="true">*</span>
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Preparar presentación"
                        className="dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                        disabled={loading}
                        required
                        aria-required="true"
                        aria-invalid={formData.name.trim() === ''}
                        aria-describedby="name-error"
                    />
                    {formData.name.trim() === '' && (
                        <p id="name-error" className="text-sm text-red-500 mt-1">
                            El nombre de la tarea es requerido
                        </p>
                    )}
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="priority" className="text-gray-700 dark:text-gray-300 text-base">
                            Prioridad <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Select
                            value={formData.priority}
                            onValueChange={(value: 'alta' | 'media' | 'baja') =>
                                setFormData({ ...formData, priority: value })
                            }
                            disabled={loading}
                            required
                        >
                            <SelectTrigger
                                className="dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                                aria-required="true"
                            >
                                <SelectValue placeholder="Selecciona prioridad" />
                            </SelectTrigger>
                            <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                                <SelectItem value="alta" className="dark:hover:bg-gray-600 transition-colors">
                                    Alta
                                </SelectItem>
                                <SelectItem value="media" className="dark:hover:bg-gray-600 transition-colors">
                                    Media
                                </SelectItem>
                                <SelectItem value="baja" className="dark:hover:bg-gray-600 transition-colors">
                                    Baja
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
        
                    <div className="space-y-2">
                        <Label htmlFor="date" className="text-gray-700 dark:text-gray-300 text-base">
                            Fecha límite <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                            disabled={loading}
                            required
                            aria-required="true"
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                </div>
        
                <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                    disabled={loading || !formData.name.trim()}
                    aria-busy={loading}
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                            <span>Creando...</span>
                        </>
                    ) : (
                        'Crear Tarea'
                    )}
                </Button>
            </form>
        </div>
    );
};

export default CreateTaskForm;