// src/App.tsx
import { MyTable } from "./CustomComponents/CustomTable";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../src/components/ui/table";
import { Button } from "../src/components/ui/button";

interface User {
  name: string;
  age: number;
  job: string;
}

function App() {
  const data: User[] = [
    { name: "John Doe", age: 30, job: "Developer" },
    { name: "Jane Smith", age: 25, job: "Designer" },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900 text-white">
      <MyTable />
      <div className="overflow-x-auto bg-zinc-900 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Tabla de Usuarios</h2>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="p-3 text-left">Nombre</TableHead>
              <TableHead className="p-3 text-left">Edad</TableHead>
              <TableHead className="p-3 text-left">Trabajo</TableHead>
              <TableHead className="p-3 text-left">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user: User, index: number) => (
              <TableRow key={index} className="border-t border-zinc-600">
                <TableCell className="p-3">{user.name}</TableCell>
                <TableCell className="p-3">{user.age}</TableCell>
                <TableCell className="p-3">{user.job}</TableCell>
                <TableCell className="p-3">
                  <Button variant="destructive">Eliminar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    
  );
}

export default App;
