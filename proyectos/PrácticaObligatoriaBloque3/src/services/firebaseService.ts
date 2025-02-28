import { Task, TaskUpdate } from "../context/TaskContext";

const apiRest =
  "https://todolist-ea782-default-rtdb.europe-west1.firebasedatabase.app";

// Función para obtener las tareas de un usuario
export const getTasksforUser = async (userId: string) => {
  try {
    const response = await fetch(`${apiRest}/tasks/${userId}.json`);
    if (!response.ok) throw new Error("Error al obtener las tareas");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para añadir una tarea
export const createTaskForUser = async (
  userId: string,
  taskData: Omit<Task, "id">
) => {
  try {
    const response = await fetch(`${apiRest}/tasks/${userId}.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) throw new Error("Error al crear la tarea");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para actualizar una tarea
export const updateTaskForUser = async (
  userId: string,
  taskId: string,
  taskData: TaskUpdate
) => {
  try {
    const response = await fetch(`${apiRest}/tasks/${userId}/${taskId}.json`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) throw new Error("Error al actualizar la tarea");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para eliminar una tarea
export const deleteTaskForUser = async (userId: string, taskId: string) => {
  try {
    const response = await fetch(`${apiRest}/tasks/${userId}/${taskId}.json`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Error al eliminar la tarea");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
