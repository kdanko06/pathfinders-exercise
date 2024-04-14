// import useState from 'react';
// import { FaEdit, FaTrash, FaCheckCircle } from 'react-icons/fa';
import TASKS from "./tasks.json"


const Task = ({task}) => {
    return (
        <div>
            <h3>{task.name}</h3>
            <span contentEditable>{task.body}</span>
        </div>
    )
 };

const TaskCategoryCol = ({tasks, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {tasks.map(task => {
                return (
                    <Task task ={task} />
                )
            })};
        </div>
    );
};

function TaskBoard ({data}) {
    // const [tasks, setTasks] = useState(data);
    console.log(data);
    

    // const renderColumns = () => {
    //     return tasks.map((task) => {
    //         return
    //     });
    // };

    // const columns = [];
    // const titles = ["To do", "In Progres", "In Review", "Done"];
    let toDo = [];
    let inProgres = [];
    let inReview = [];
    let done = [];
    // let lastTask = null;

    // toDo = data.map(task => {
    //     if (task.inProgres === true){
    //         inProgres.push(task)
    //     }
    //     // else if (task.inReview === true){
    //     //     inReview.push(task)
    //     // }
    //     // else if (task.done === true){
    //     //     done.push(task)
    //     // }
    //     // toDo.push(task);
    // });

    // titles.map(title => {
    //     const taskCategories = tasks.filter
    //     columns.push(<TaskCategoryCol
    //         tasks={inProgres}
    //         key={title}></TaskCategoryCol>)
    // });
    
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 }}>
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