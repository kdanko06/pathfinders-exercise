const Task = ({task, onMoveTaskBack, onMoveTask, onDeleteTask}) => {
    return (
        <div className="border-2 border-gray-200 rounded-lg shadow-xl">
            <h3>{task.name}</h3>
            <span contentEditable>{task.body}</span><br />
            {onMoveTaskBack && <button className='border-2 rounded' onClick={() => onMoveTaskBack(task)}><b>Move to In Progres</b></button>}
            {onMoveTask && <button className='border-2 rounded' onClick={() => onMoveTask(task)}>Move Task</button>}
            {onDeleteTask && <button onClick={() => onDeleteTask(task)}>Delete task</button>}
        </div>
    );
};

export default Task;