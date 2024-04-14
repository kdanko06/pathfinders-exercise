// import useState from 'react';
import TASKS from "./tasks.json"

const Task = ({task}) => {
    return (
        <div className="taskboard__task">
            <h3>{task.name}</h3>
            <span contentEditable>{task.body}</span><br />
            <button className="taskboard__task__button">hh</button>
        </div>
    )
 };

const TaskCategoryCol = ({tasks, title}) => {
    return (
        <div className="taskboard__col">
            <h1>{title}</h1>
            {tasks.map(task => {
                return (
                    <Task key={task.name.toString()} task ={task} />
                )
            })}
        </div>
    )
};

const TaskBoard = ({data}) => {
    console.log(data);

    let toDo = [];
    let inProgres = [];
    let inReview = [];
    let done = [];
    
    data.map(task => {
        if (task.category === "inProgres"){
            inProgres.push(task)
        }
        else if (task.category === "inReview"){
            inReview.push(task)
        }
        else if (task.category === "done"){
            done.push(task)
        }
        else if (task) {toDo.push(task)}
    }
    );
    
    return (
        <div className="taskboard" style={{ padding:20, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
            <TaskCategoryCol tasks ={toDo} title={"To Do"}></TaskCategoryCol>
            <TaskCategoryCol tasks ={inProgres} title={"In Progres"}></TaskCategoryCol>
            <TaskCategoryCol tasks ={inReview} title={"In Review"}></TaskCategoryCol>
            <TaskCategoryCol tasks ={done} title={"Done"}></TaskCategoryCol>
            {/* {columns} */}
        </div>
    )
};

export default function TaskBoardView() {
    return <TaskBoard data={TASKS} />;
}

// const List = ({ taskList, handleRemove, handleEdit }) => {
//     const [isCompleted, setIsCompleted] = useState(false);
//     // const refContainer = useRef(null);
//     const handleComplete = (e) => {
//         setIsCompleted(!isCompleted);
//     };
//     return (
//         <div className="list">
//         <div className="list-container">
//         {taskList.map((el) => {
//             return (
//                 className={\ task ${isCompleted ? 'finished' : ''}`}key={el.id}><p className="task-text">{el.task}</p><div className="buttons"><buttontype="button"className="remove"onClick={() => handleRemove(el.id)}><FaTrashstyle={{ color: '#16A34A' }}></FaTrash></button><buttontype="button"className="edit"onClick={() => handleEdit(el.id)}><FaEditstyle={{ color: '#CA8A04' }}></FaEdit></button><buttontype="button"className="completed"onClick={handleComplete}><FaCheckCirclestyle={{ color: '#DC2626' }}></FaCheckCircle></button></div></div>);})}</div></div>);};
//                 export default List;`
                
// export default List;