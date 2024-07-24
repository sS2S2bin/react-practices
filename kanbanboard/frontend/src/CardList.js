import React from 'react';
import {Card_List, _Card, Card_Details, Card_Title, Card_Title_Open} from './assets/scss/CardList.scss';
import TaskList from './TaskList';

function CardList({data}) {
    const todoCardList = [];
    const doingCardList = [];
    const doneCardList = [];

    {data && data.forEach(e=>{
        if(e.status ==="ToDo"){
            todoCardList.push(e);
        }
        else if(e.status ==="Doing"){
            doingCardList.push(e);
        }else if(e.status ==="Done"){
            doneCardList.push(e);
        }
    });}
    return (
        <div>
            <div className={Card_List}>
            <h1>Todo</h1>
            {todoCardList && todoCardList.map(e => (
            <div key={e.no} className={_Card}>
                <div className={`${Card_Title} ${Card_Title_Open}`}>{e.title}</div>
                <div className={Card_Details}>
                    {e.description}
                </div>
                {e.tasks && <TaskList tasks={e.tasks}/>}
            </div>
            ))}
            </div>

            <div className={Card_List}>
            <h1>Doing</h1>
            {doingCardList && doingCardList.map(e => (
            <div key={e.no} className={_Card}>
                <div className={`${Card_Title} ${Card_Title_Open}`}>{e.title}</div>
                <div className={Card_Details}>
                    {e.description}
                </div>
                {e.tasks && <TaskList tasks={e.tasks}/>}
            </div>
            ))}
            </div>

            <div className={Card_List}>
            <h1>Done</h1>
            {doneCardList && doneCardList.map(e => (
            <div key={e.no} className={_Card}>
                <div className={`${Card_Title} ${Card_Title_Open}`}>{e.title}</div>
                <div className={Card_Details}>
                    {e.description}
                </div>
                {e.tasks && <TaskList tasks={e.tasks}/>}
            </div>
            ))}
            </div>
        </div>
        )
}

export default CardList;

