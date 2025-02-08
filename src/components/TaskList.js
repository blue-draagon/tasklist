import React from 'react';

function TaskList({tasks, setTasks, setId}) {
    console.log("TaskList state change")

    const handleEdit = (id) => {
        setId(id)
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasks.length}</span>
                </div>
                <button onClick={() => setTasks([])} className="clearAll">
                    Clear All Task
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span>{task.name}</span>
                            <span>{task.date}</span>
                        </p>
                        <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default TaskList;