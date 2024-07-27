import React, { useState } from 'react';
import { Card_Details, Card_List, Card_Title, Card_Title_Open, _Card } from './assets/scss/CardList.scss';
import TaskList from './TaskList';

function CardList({data}) {
    const todoCardList = [];
    const doingCardList = [];
    const doneCardList = [];

    {data && data.forEach(e=>{
        if(e.status ==="ToDo"){todoCardList.push(e);}
        else if(e.status ==="Doing"){doingCardList.push(e);
        }else if(e.status ==="Done"){doneCardList.push(e);}
    });}
    
    const [cards, setCards] = useState(data);

    const handleTaskAdded = (newTask, cardId) => {
        // 새 태스크가 추가된 카드 찾기
        const updatedCards = cards.map(card => {
            if (card.no === cardId) {
                return {
                    ...card,
                    tasks: [...card.tasks, newTask]
                };
            }
            return card;
        });
        setCards(updatedCards);
    };


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
                {e.tasks && <TaskList cardNo={e.no} key={e.tasks.no} tasks={e.tasks} status={e.status} />}
                
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
                {e.tasks && <TaskList key={e.tasks.no} tasks={e.tasks} status={e.status} />}
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
                {e.tasks && <TaskList key={e.tasks.no} tasks={e.tasks} status={e.status} />}
            </div>
            ))}
            </div>
        </div>
        )
}

export default CardList;

