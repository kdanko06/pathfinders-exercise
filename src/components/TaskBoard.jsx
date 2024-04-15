import React, { useState, useEffect } from 'react';
import TASKS from "./tasks.json";

const Task = ({task, onMoveTask}) => {
    return (
        <div className="taskboard__task">
            <h3>{task.name}</h3>
            <span contentEditable>{task.body}</span><br />
            <button className="taskboard__task__button" onClick={() => onMoveTask(task)}>Move Task</button>
        </div>
    );
};

const TaskCategoryCol = ({tasks, title, onMoveTask}) => {
    return (
        <div className="taskboard__col">
            <h1>{title}</h1>
            {tasks.map(task => (
                <Task key={task.name.toString()} task={task} onMoveTask={onMoveTask} />
            ))}
        </div>
    );
};

const TaskBoard = ({data}) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(data);
    }, [data]);

    const moveTask = (taskToMove) => {
        const updatedTasks = tasks.map(task => {
            if (task.name === taskToMove.name) {
                const nextCategory = (task.category === "toDo") ? "inProgres" : 
                                      (task.category === "inProgres") ? "inReview" : 
                                      (task.category === "inReview") ? "done": "done";
                return {...task, category: nextCategory};
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const filterTasksByCategory = (category) => tasks.filter(task => task.category === category);

    return (
        <div className="taskboard" style={{ padding: 20, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
            <TaskCategoryCol tasks={filterTasksByCategory('toDo')} title="To Do" onMoveTask={moveTask} />
            <TaskCategoryCol tasks={filterTasksByCategory('inProgres')} title="In Progress" onMoveTask={moveTask} />
            <TaskCategoryCol tasks={filterTasksByCategory('inReview')} title="In Review" onMoveTask={moveTask} />
            <TaskCategoryCol tasks={filterTasksByCategory('done')} title="Done" onMoveTask={moveTask} />
        </div>
    );
};

export default function TaskBoardView() {
    return <TaskBoard data={TASKS} />;
}