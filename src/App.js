import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Row } from "react-bootstrap";
import { TaskRow } from "./components/TaskRow";

function App() {
  const [userName, setUserName] = useState("rodri");
  const [taskItems, setTaskItems] = useState([
    { name: "tarea uno", done: false },
    { name: "tarea dos", done: false },
    { name: "tarea tres", done: true },
    { name: "tarea cuatro", done: false },
  ]);

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done}: t)))

  const taskTableRows = () => {
    return taskItems.map((task) => (
      <tr key={task.name}>
        <td>{task.name}</td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <h1>Hola tareas</h1>
      <table className="table tabel-striped table-bordered">
        <thead>
          <tr>
            <th>descripcion</th>
            <th>done</th>
          </tr>
        </thead>
        <tbody>{taskItems.map((task) =><TaskRow task={task} key={task.name} toggleTask={toggleTask}/>)}</tbody>
      </table>
    </div>
  );
}

export default App;
