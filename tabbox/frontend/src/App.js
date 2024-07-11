import React from 'react';
import './assets/css/App.css';
import TabBox from './TabBox';

function App() {
    const tabs = [
        {no:1, name:'메뉴1', active: false, contents:'메뉴1 입니다.'},
        {no:2, name:'메뉴2', active: false, contents:'메뉴2 입니다.'},
        {no:3, name:'메뉴3', active: true, contents:'메뉴3 입니다.'},
        {no:4, name:'메뉴4', active: false, contents:'메뉴4 입니다.'},
        {no:5, name:'메뉴5', active: false, contents:'메뉴5 입니다.'}
    ];
    return (
        <TabBox tabs={tabs} />
    );
}

export {App};