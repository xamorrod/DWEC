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
            await addTask(user.uid, formData);
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
        <div className="bg-card text-card-foreground rounded-lg p-6 mb-4 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Nueva Tarea</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">
                        Nombre de la tarea <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: Preparar presentación"
                        className="focus-visible:ring-ring"
                        disabled={loading}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="priority">
                            Prioridad <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={formData.priority}
                            onValueChange={(value: 'alta' | 'media' | 'baja') =>
                                setFormData({ ...formData, priority: value })
                            }
                            disabled={loading}
                        >
                            <SelectTrigger className="focus-visible:ring-ring">
                                <SelectValue placeholder="Selecciona prioridad" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="alta" className="hover:bg-accent">Alta</SelectItem>
                                <SelectItem value="media" className="hover:bg-accent">Media</SelectItem>
                                <SelectItem value="baja" className="hover:bg-accent">Baja</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date">
                            Fecha límite <span className="text-destructive">*</span>
                        </Label>
                        <Input
                            type="date"
                            id="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="focus-visible:ring-ring"
                            disabled={loading}
                            required
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    disabled={loading || !formData.name.trim()}
                >
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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