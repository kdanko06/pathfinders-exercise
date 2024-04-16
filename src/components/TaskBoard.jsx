import React, { useState, useEffect } from 'react';
import TASKS from "./tasks.json";
import Task from "./Task.jsx"

const TaskCategoryCol = ({tasks, title, onMoveTaskBack, onMoveTask, onDeleteTask}) => {
    return (
        <div className="flex flex-col space-y-4 border">
            <h1>{title}</h1>
            {tasks.map(task => (
                <Task key={task.name.toString()} task={task} onMoveTaskBack={title === "In Review" ? onMoveTaskBack : null} onMoveTask={title === "Done" ?  null : onMoveTask } onDeleteTask={title === "Done" ? onDeleteTask : null}/>
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

    const moveTaskBack = (taskToMoveBack) =>{
        const updatedTasks = tasks.map(task => {
            if (task.name === taskToMoveBack.name) {
                return {...task, category: "inProgres"};
            }
            return task;
        });
        setTasks(updatedTasks);
    }



    const deleteTask = (taskToDelete) => {
        const updatedTasks = (task) => tasks.filter(task => task.name !== taskToDelete.name);
        setTasks(updatedTasks);
    }



    const filterTasksByCategory = (category) => tasks.filter(task => task.category === category);

    return (
        <div className="grid grid-cols-4 gap-4" >
            <TaskCategoryCol tasks={filterTasksByCategory('toDo')} title="To Do" onMoveTask={moveTask} />
            <TaskCategoryCol tasks={filterTasksByCategory('inProgres')} title="In Progress" onMoveTask={moveTask} />
            <TaskCategoryCol tasks={filterTasksByCategory('inReview')} title="In Review" onMoveTaskBack={moveTaskBack} onMoveTask={moveTask} />
            <TaskCategoryCol tasks={filterTasksByCategory('done')} title="Done" onMoveTask={moveTask} onDeleteTask={deleteTask}/>
        </div>
    );
};

export default function TaskBoardView() {
    return <TaskBoard data={TASKS} />;
}