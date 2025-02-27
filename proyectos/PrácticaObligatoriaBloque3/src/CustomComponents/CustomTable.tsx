// src/components/ui/table.tsx
import { Table } from "../components/ui/table";
import { Button } from "../components/ui/button";

const data = [
    { name: "John Doe", age: 29, job: "Software Engineer" },
    { name: "Jane Smith", age: 34, job: "Designer" },
    { name: "Sam Johnson", age: 23, job: "Developer" },
];

export function MyTable() {
    return (
        <div className="overflow-x-auto bg-zinc-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Tabla de Usuarios</h2>
            <Table>
                <thead>
                    <tr>
                        <th className="p-3 text-left">Nombre</th>
                        <th className="p-3 text-left">Edad</th>
                        <th className="p-3 text-left">Trabajo</th>
                        <th className="p-3 text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index} className="border-t border-zinc-600">
                            <td className="p-3">{user.name}</td>
                            <td className="p-3">{user.age}</td>
                            <td className="p-3">{user.job}</td>
                            <td className="p-3">
                                <Button variant="destructive">Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
