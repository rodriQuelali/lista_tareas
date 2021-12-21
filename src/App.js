import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row, Table } from "react-bootstrap";
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";
import { Taskcreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [userName, setUserName] = useState("rodri");
  const [taskItems, setTaskItems] = useState([
    { name: "tarea uno", done: false },
    { name: "tarea dos", done: false },
    { name: "tarea tres", done: true },
    { name: "tarea cuatro", done: false }
  ]);
  const [showCompleted, setShowCompleted] = useState(true);

  //manejando el useEffect, manejo de localstorash
useEffect(() => {
  let data = localStorage.getItem('tasks');
  if(data != null){
    setTaskItems(JSON.parse(data));
  }else{
    setUserName('rdorigo Example....');
    setTaskItems([
      { name: "tarea uno example", done: false },
      { name: "tarea dos example", done: false },
      { name: "tarea tres example", done: true },
      { name: "tarea cuatro example", done: false }
    ]);
    setShowCompleted(true);
  }
}, [])

  //creando para guardar localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  // creando datos de tareas
  const createNewTask = taskName =>{
    if(!taskItems.find(t => t.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}]);
    }
  }

  // lista de tareas y cambio de estadoa false y true
  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done}: t)))

  const taskTableRows = (doneValue) => (
    taskItems
    .filter(task => task.done === doneValue)
    .map((task) => (
        <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
      ))
  );

  return (
    <div className="container">

      <TaskBanner userName={userName} taskItems={taskItems}/>

      <Taskcreator callback={createNewTask}/>

      <h1>No realizar tareas</h1>
      <table className="table tabel-striped table-bordered">
        <thead>
          <tr>
            <th>descripcion</th>
            <th>done</th>
          </tr>
        </thead>
        <tbody>
          { taskTableRows(false)}
        </tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl
          descriptions="completed task"
          isChecked={showCompleted}
          callback={checked => setShowCompleted(checked)}
        />
      </div>

      {
        showCompleted && (
          <table className="table table-scriped table table border">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
            { taskTableRows(true)}
            </tbody>
          </table>
        )
      }
    </div>
  );
}

export default App;
