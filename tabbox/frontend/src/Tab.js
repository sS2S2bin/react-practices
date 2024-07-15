import React from 'react';
import {Tab_Item} from './assets/scss/Tab.scss';

function Tab({no, name, active, selectTab}) {
    return (
        <li className={[Tab_Item, (active ? 'active' : '')].join(' ')}
        onClick={()=>{
            // 키는 못써서 no를 넘겨줘야해 
            // no 값이 서로 다를 수가 있다?  no : 41인데 3번째인 애면 3을 active시켜야해    
            console.log("tab onclick :"+no);
            selectTab(no)
        }}
        >{name}</li>
    );
}

export default Tab;