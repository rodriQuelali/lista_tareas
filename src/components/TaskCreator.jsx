import {useState} from 'react';

export const Taskcreator = props =>{

    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const createNewTask = () =>{
        props.callback(newTaskName);
        //console.log(newTaskName);
        setNewTaskName('');
    }
    return (
        <div className="my-1">
            <input type="text" className="form-control" value={newTaskName} onChange={updateNewTaskValue} />
            <button className="btn btn-primary" onClick={createNewTask}> add</button>
        </div>
    )
}