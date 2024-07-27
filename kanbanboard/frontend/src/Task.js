import React from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done}) {
    return (
        <li className={_Task}>
            <input type='checkbox' checked={done==="Y"} value={name} />
            <a 
                href='#'
                className={Task_Remove} 
                onClick={ (e) =>{
                    e.preventDefault();
                    console.log("no : "+no);
            }}>{name}</a>
        </li>
    );
}

export default Task;