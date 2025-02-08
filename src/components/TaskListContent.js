import React, {useEffect, useState} from 'react';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TASKS_KEY = "tasklist";

const TaskListContent = () => {
    console.log("TaskListContent state change")

    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem(TASKS_KEY)) || [
            // {id: 1001, name: "Task A", date: "22:23 - 2025/12/25"},
            // {id: 1002, name: "Task B", date: "22:23 - 2025/12/25"},
            // {id: 1003, name: "Task C", date: "22:23 - 2025/12/25"},
        ])
    const [id, setId] = useState(null)

    useEffect(() => {
        localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
    }, [tasks]);
    return (
        <main>
            <TaskForm
                tasks={tasks}
                setTasks={setTasks}
                id={id}
                setId={setId}
            />
            <TaskList
                tasks={tasks}
                setTasks={setTasks}
                setId={setId}
            />
        </main>
    );
};

export default TaskListContent;