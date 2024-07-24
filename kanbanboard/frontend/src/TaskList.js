import React from 'react';
import {Task_List,Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({tasks}) {
    return (
        // 파라미터를 항상 제일 바깥에 둬야하는 것 같다.
        <div className={Task_List}>
            {tasks && tasks.map(e =>(
            <ul>
                <Task no={e.no} name={e.name} done={e.done} />
            </ul>
            ))}
            <input 
                className={Input_Add_Task}
                type='text'
                placeholder='태스크 추가' 
                // onClick={taskInputClick }    
            />
        </div>
    );
}

export default TaskList;