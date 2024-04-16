import './App.css';
import Header from "./components/Header"
import TaskBoard from "./components/TaskBoard"
import AddTask from "./components/AddTask"
import { useState } from 'react';

function App() {

  const [page, setPage] = useState("taskBoard")

  const setCurrentPage = (currentPage) => {
    setPage(currentPage);
  }

  return (
    <div className="App">
      <Header onSetPage={setCurrentPage}></Header>
      {page === "taskBoard" && <TaskBoard></TaskBoard>}
      {page === "addTask" && <AddTask></AddTask>}
    </div>
  );
}

export default App;
