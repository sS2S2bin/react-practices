import React, { useEffect, useState } from 'react';
import './assets/scss/KanbanBoard.scss';
import CardList from './CardList';

function KanbanBoard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchBoard();
    }, []);

    const fetchBoard = async () => {
        try {
            console.log('Fetching board data...'); // 디버깅용 로그
            const response = await fetch('/api', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            console.log('Response status:', response.status); // 디버깅용 로그 여기???
            
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            console.log('Fetched data:', json); // 디버깅용 로그

            if (json.result !== 'success') {
                throw new Error(json.message);
            }
            setData(json.data);
        } catch (err) {
            console.error('Error fetching board data:', err); // 디버깅용 로그
        }
    };



    return (
        <div id="root">
            <div className="Kanban_Board">
                <CardList data={data} />
            </div>
        </div>
    );
}

export default KanbanBoard;
