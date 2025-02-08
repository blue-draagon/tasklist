import {useEffect, useState} from "react";

const TaskForm = ({tasks, setTasks, id, setId}) => {
    console.log("TaskForm state change")
    const [name, setName] = useState("")

    useEffect(() => {
        for (const task of tasks) {
            if (task.id === id) {
                setName(task.name)
            }
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault()
        const d = new Date()
        if (id) {
            setTasks(tasks.map(task =>
                task.id === id ? {id, name, date: `${d.toLocaleTimeString()} - ${d.toLocaleDateString()}`} : task
            ))
        } else {
            const id = d.getTime()
            const date = `${d.toLocaleTimeString()} - ${d.toLocaleDateString()}`
            const task = {id, name, date}
            setTasks([...tasks, task])
        }
        setName("")
        setId(null)
    }

    function handleChange(e) {
        setName(e.target.value)
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task"
                       value={name} onChange={handleChange}
                       placeholder="Add new task" maxLength="25"
                />
                {id && <button type="submit">Update</button>}
                {!id && <button type="submit">Add</button>}
            </form>
        </section>
    );
};

export default TaskForm;