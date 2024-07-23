import React from 'react';
import data from './assets/json/data';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';
import CardList from './CardList';

function KanbanBoard() {
    return (
        <div id={'root'}>
            <div className={Kanban_Board}>
                <CardList data={data}/>
            </div>
        </div>
    );
}

export default KanbanBoard;