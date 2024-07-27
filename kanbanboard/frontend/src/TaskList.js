import React,{useState} from 'react';
import {Task_List,Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({cardNo, tasks, status, onTaskAdded}) {

    const [inputText, setInputText] = useState("");

    const handleEnter = async (e, card_no) => {
        if (e.key === 'Enter' && inputText.trim() !== '') {
            console.log("no: "+ card_no);
            console.log("input : "+ inputText);

            // API POST 요청 보내기
            const newTask = {
                name: inputText,
                done: 'N',
                cardNo: card_no
            };

            try {
                const response = await fetch('/api/tasks', {
                    method: 'POST',
                    headers: {
                        'Accept' : 'application/json', // 500 에러
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newTask)
                });

                if(!response.ok){
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                const result = await response.json();
                if(json.ressult !=='success'){
                    throw new Error(json.message);
                }
                setInputText('');
                console.log("task add: "+ result.data);
                onTaskAdded(result.data); // 새 태스크 데이터를 부모 컴포넌트에 전달
                console.log(response);
            } catch (error) {
                console.error('Error adding task:', error);
            }
        }
    };

    return (
        <div className={Task_List}>
            <p>{cardNo}</p>
            {tasks && tasks.map(e =>(
            <ul>
                <Task key={e.no} no={e.no} name={e.name} done={e.done} />
            </ul>
            ))}
            { status==="ToDo"?
                <input
                className={Input_Add_Task}
                type='text'
                placeholder='태스크 추가' 
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyDown={(event) => handleEnter(event, cardNo)} 
                />
            :
            ''
            }

        </div>
    );
}

export default TaskList;